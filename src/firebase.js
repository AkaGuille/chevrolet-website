// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {
    userValidation
} from './userValidation'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgXbTVl3m6gb315yV5wktxxjwgFy1jC5g",
    authDomain: "chevrolet-database.firebaseapp.com",
    projectId: "chevrolet-database",
    storageBucket: "chevrolet-database.appspot.com",
    messagingSenderId: "426490634395",
    appId: "1:426490634395:web:9607700a87ca73d1d3663e",
    measurementId: "G-T59RWQ8HYW"
  };

// Initialize Firebase, firestore, Storage, Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log('hubo un cambio en auth')
    if (user) {
        // const uid = user.uid;
        // userValidation(true, user.email)
    } else {
        // userValidation(false)
    }
});

export async function getCars(section){
    const allProducts = [];
    const querySnapshot = await getDocs(collection(db, section));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allProducts.push({...doc.data(), id: doc.id});
    });

    return allProducts;
}


export async function addProduct(product, coleccion) {
    try {
        const docRef = await addDoc(collection(db, coleccion), product);
        console.log("Si funciona");

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addProductWithId(product, id, file) {
    try {
        const imageUrl = await uploadFile(file.name, file, 'products');

        await setDoc(doc(db, "products", id), {
            ...product,
            url: imageUrl
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function uploadFile(name, file, folder) {
    const taskImgRef = ref(storage, `${folder}/${name}`);

    try {
        await uploadBytes(taskImgRef, file);
        const url = await getDownloadURL(taskImgRef);
        return url;
    } catch (error) {
        console.log("error creando imagen ->", error);
    }
}

export async function createUser(email, password, username, file) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        // Signed in
        const user = userCredential.user;
        // console.log("usuario creado con ->", user.uid);

        /// subir imagen
        const imageUrl = await uploadFile(file.name, file, 'users');

        /// crear registro en BD
        await addUserToDB({
            username,
            imageUrl,
            email
        }, user.uid)

        return {
            status: true,
            info: user.uid
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            status: false,
            info: errorMessage
        };
    }
}

export async function logInUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return {
            status: true,
            info: user.uid
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            status: false,
            info: errorMessage
        };
    }
}

export async function logOut() {

    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
    };
}

export async function addUserToDB(userData, uid) {
    console.log('userData ---->', userData)
    console.log('uid ---->', uid)
    try {
        const docRef = await setDoc(doc(db, "users", uid), userData);

        console.log(docRef)

        console.log("User written with ID: ", uid);
    } catch (e) {
        console.error("Error adding user: ", e);
    }
}