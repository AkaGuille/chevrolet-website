class productComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectecCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'price', 'model', 'category', 'color'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        let url = this.name.replaceAll(" ", "-");
        let refDetail = "./product-detail/index.html?id=" + url;
        this.innerHTML = `
        <link rel="stylesheet" href="/product-detail/style.css">
        <div id= "imagencabrona">
        <img src= ${this.image} alt="">
        </div>

        <header>
        <!--Navegacion-->
        <nav class="nav-main">

            <div class="menu-btn">
                
            </div>


            <ul class="nav-menu2">
                <li id="location-text">
                    <a href="#">ABOUT ${this.name}
                    </a>
                </li>

                <li>
                    <a href="#">PRICES AND VERSIONS</a>
                </li>
                <li>
                    <a href="#">ACCESSORIES</a>
                </li>

                <li>
                    <a href="#">CONTACT</a>
                </li>


            </ul>

        </nav>

    </header>

    <div  id="carinfo-container">
    <div id= "contenedor-titulo-descripcion">
        <h2 id="car-title" style="position: absolute; top: 90%; transform: translate(-50%, -50%);">${this.name}</h2>
        <p id="car-description" style="position: absolute; top: 90%; transform: translate(-50%, -50%);">${this.description}</p>
</div>
        <p id="car-price">BASE PRICE: ${this.price}</p>
        <p id="car-color">COLOR: ${this.color} <input type="color" id="color-picker"></p>

        </div>

        <div  id="interior-container">
        <p id="car-interior"> ${this.name} INTERIOR </p>
        </div>


        <div class="grid-container">
        <img src="https://www.chevrolet.com.sv/wp-content/uploads/2021/03/1920x1080-album-3.png" alt="Imagen 1">
        <img src="https://img.automexico.com/2020/01/17/2gS0vPdI/spark20-5-7707.jpg" alt="Imagen 2">
        <img src="https://img.automexico.com/2018/10/11/b09YwtPD/sillas-de-cuero-01-ded7.jpeg" alt="Imagen 3">
        <img src="https://img.automexico.com/2018/10/11/b09YwtPD/sillas-de-cuero-c2fc.png" alt="Imagen 4">
        </div>

    `
    }

}

customElements.define('product-component', productComponent)
export default productComponent;