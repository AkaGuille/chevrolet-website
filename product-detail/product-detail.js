import './src/components/filter/filter.js'

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
    console.log(arregloCarros);
    
}