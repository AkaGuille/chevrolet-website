class FilterComponent extends HTMLElement {

    constructor() {
        super();
    }

    // this is how you declare which props are you interested in
    static get observedAttributes() {
        return ['name', 'image', 'description', 'price', 'model', 'category', 'color'];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/filter/style.css">
        <section class="filter">
            <article>
                <img id="car-image" src = ${this.image}>
                    <div id="text-car-information">
                        <h2>${this.name}</h2>
                        <p>$ ${this.price}</p>
                        <p>${this.description}</p>
                        <p>${this.category}</p>
                        <p>${this.color}</p>
                    </div>
            </article>
        </section>`
    }
}

customElements.define('filter-component', FilterComponent)
export default FilterComponent;