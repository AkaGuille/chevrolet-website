class productComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'price', 'model', 'category', 'color'];
    }

    render ( ) {
        let url = this.name.replaceAll(" ", "-");
        let refDetail = "./product-detail/index.html?id=" + url; 
        this.innerHTML = `
        <img src= ${this.image} alt="">
    `
    }

}

customElements.define('product-component', productComponent)
export default productComponent;



