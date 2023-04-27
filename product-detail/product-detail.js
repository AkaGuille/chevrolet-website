let arregloCarros = []
async function getProducts(){
    try {
    let response = await fetch('https://apimocha.com/chevroletcars/cars');
    let data = await response.json();
    organiceProducts(data);
    }catch (e) {
    console.log(e);
    }

}

getProducts();

function organiceProducts(arregloCarros) {
    let url = window.location.search;
    let param = new URLSearchParams(url);
    let productID = param.get("id").replace('"', "");
    
    let product = arregloCarros.find((item)=>{
        let nameCompare = item.name.replaceAll(" ", "-");
        return nameCompare === productID;
    })
    console.log(product);

}

// class productDetail extends HTMLElement {
//     constructor () {
//         super();
//     }

//     render () {


// this.innerHTML =  `
// <h1>${e.name}</h1>
// <img src="#" alt="">
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga cumque doloremque sed. Ab enim aspernatur, earum, nobis possimus labore exercitationem eius libero veritatis mollitia vero excepturi, doloremque tempora esse!</p>
// <button>BUY NOW</button>
// `
        

        
//     }

// }

// customElements.define('product-component', productDetail)
