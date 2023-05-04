class FilterComponent extends HTMLElement {

    constructor() {
        super();
    }

    // this is how you declare which props are you interested in
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

    render() {
        let url = this.name.replaceAll(" ", "-");
        let refDetail = "./product-detail/index.html?id=" +url; 
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/filter/style.css">
        <a href=${refDetail}>
        <section class="filter">
            <article>
                <img id="car-image" src = ${this.image}>
                    <div id="text-car-information">
                        <h2>${this.name}</h2>
                        <h3>$ ${this.price}</h3>
                        <p>${this.description}</p>
                        <p>${this.category}</p>
                        <p>${this.color}</p>
                    </div>
            </article>
        </section>
        </a>`
    }
}

customElements.define('filter-component', FilterComponent)
export default FilterComponent;