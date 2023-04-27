

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