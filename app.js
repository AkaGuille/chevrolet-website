import './src/components/filter/filter.js'
const filterContainer = document.querySelector('#filter-container');
const categoriesButtons = document.querySelectorAll('#filter-categories-titles button')

console.log(categoriesButtons);
let arregloCarros = []
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
        // enlace.href = url;
        // enlace.innerHTML = element.name;
        filterContainer.append(carOb);
        // filterContainer.appendChild(enlace);
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