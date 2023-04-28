class productComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectecCallback(){
        this.render();
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'price', 'model', 'category', 'color'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render ( ) {
        let url = this.name.replaceAll(" ", "-");
        let refDetail = "./product-detail/index.html?id=" + url; 
        this.innerHTML = `
        <link rel="stylesheet" href="/product-detail/style.css">
        <img src= ${this.image} alt="">
        <h2>${this.name}</h2>
        <p>$ ${this.price}</p>
        <p>${this.description}</p>
        <p>${this.category}</p>
        <p>${this.color}</p>
    `
    }

}

customElements.define('product-component', productComponent)
export default productComponent;



