import './product-component.js';
const detailProductContainer = document.querySelector('#detail-product-container');
const colorPicker = document.getElementById('color-picker');
const carColor = document.getElementById('car-color');

let arregloCarros = []
async function getProducts(){
    try {
    let response = await fetch('https://apimocha.com/chevroletcars/cars');
    let data = await response.json();
    data.forEach(element => {
        arregloCarros.push(element)
    });
    organiceProducts(arregloCarros);
    }catch (e) {
    console.log(e);
    }

}

getProducts();

function organiceProducts(array) {
    let url = window.location.search;
    let param = new URLSearchParams(url);
    let productID = param.get("id").replace('"', "");
    let product = arregloCarros.find((item)=>{
        let nameCompare = item.name.replaceAll(" ", "-");
        return nameCompare === productID;
    })
    console.log(product);
    let productDetailed = document.createElement('product-component')
    productDetailed.setAttribute('image', product.image)
    productDetailed.setAttribute('name', product.name)
    productDetailed.setAttribute('price', product.price)
    productDetailed.setAttribute('description', product.description)
    productDetailed.setAttribute('category', product.category)
    productDetailed.setAttribute('color', product.color)
    detailProductContainer.append(productDetailed)
    console.log(productDetailed);
    console.log(detailProductContainer);
}


