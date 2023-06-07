import './src/components/filter/filter.js'
const filterContainer = document.querySelector('#filter-container');
const categoriesButtons = document.querySelectorAll('#filter-categories-titles button')

const form = document.querySelector('#addProduct');

console.log(categoriesButtons);
let arregloCarros = []
console.log(arregloCarros);
async function getProducts() {
    try {
        let response = await fetch('https://apimocha.com/chevroletcars/cars');
        let data = await response.json();
        console.log(data);
        arregloCarros = data;
        createCardFilter(arregloCarros);
    } catch (e) {
        console.log(e);
    }
}

getProducts();

/*
// Agrega un controlador de eventos para el envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtén los valores de los campos del formulario
    const nombre = document.querySelector('#nombre').value;
    const imagenUrl = document.querySelector('#imagen').value;
    const descripcion = document.querySelector('#descripcion').value;
    const precio = document.querySelector('#precio').value;
    const modelo = document.querySelector('#modelo').value;
    const categoria = document.querySelector('#categoria').value;
    const color = document.querySelector('#color').value;
  
    // Crea un objeto con los datos del nuevo producto
    arregloCarros = {
      name,
      image,
      description,
      price,
      model,
      category,
      color
    };
  
    // Llama a la función de Firebase para agregar el nuevo producto a la base de datos
    agregarProducto(arregloCarros);
  });
  
  // Función para agregar un nuevo producto a la base de datos de Firebase
  function agregarProducto(producto) {
    // Llama a los métodos de Firebase para agregar el producto a la base de datos
    // Aquí puedes usar los métodos proporcionados por tu archivo firebase.js
    // Por ejemplo:
    firebase.database().ref('productos').push(producto)
      .then(() => {
        // Producto agregado exitosamente
        console.log('Producto agregado exitosamente');
        // Puedes realizar alguna acción adicional, como mostrar un mensaje de éxito o redireccionar a otra página
      })
      .catch((error) => {
        // Ocurrió un error al agregar el producto
        console.error('Error al agregar el producto:', error);
        // Puedes mostrar un mensaje de error o realizar alguna otra acción adecuada
      });
  }

  */

function createCardFilter(cars, filterType, filterOption) {
    // let name = element.name.replaceAll("", "")
    // let url = "/product-detail/index.html?id=" + name;
    let filterproducts = [];
    filterContainer.innerHTML = ''
    if (!filterType || filterType === 'All') {
        filterproducts = cars;
    } else if (filterType != 'All' && filterType) {
        console.log(filterType)
        switch (filterOption) {
            case 'Category':
                filterproducts = cars.filter(product => product.category === filterType)
                break;

            case 'Color':
                filterproducts = cars.filter(product => product.color === filterType)
                break;

            case 'Model':
                filterproducts = cars.filter(product => product.model === filterType)
                break;

            case 'Ascendent':
                filterproducts = cars.filter(product => product.price >= 50000)
                break;

            case 'Descendent':
                filterproducts = cars.filter(product => product.price <= 49999)
                break;
        }

    }
    filterproducts.forEach(element => {
        const carOb = document.createElement('filter-component');
        carOb.setAttribute("name", element.name);
        carOb.setAttribute("image", element.image);
        carOb.setAttribute("description", element.description);
        carOb.setAttribute("price", element.price);
        carOb.setAttribute("model", element.model);
        carOb.setAttribute("category", element.category);
        carOb.setAttribute("color", element.color);
        const enlace = document.createElement('a');
    });
}

categoriesButtons.forEach(btn => btn.addEventListener('click', () => setCategory(btn)))

function setCategory(elem) {
    let filterOption = '';
    console.log(elem.textContent)
    if (elem.textContent === "SUVs" || elem.textContent === "Trucks" || elem.textContent === "Electric" ||
        elem.textContent === "Cars" || elem.textContent === "Performance") {
        filterOption = "Category";
    } else if (elem.textContent === "Black" || elem.textContent === "White" || elem.textContent === "Grey" ||
        elem.textContent === "Red") {
        filterOption = "Color";
    } else if (elem.textContent === "2023" || elem.textContent === "2022") {
        filterOption = "Model";
    } else if (elem.textContent === "+50000") {
        filterOption = "Ascendent";
    } else if (elem.textContent === "-50000") {
        filterOption = "Descendent";
    }

    console.log(filterOption);
    createCardFilter(arregloCarros, elem.textContent, filterOption)
}