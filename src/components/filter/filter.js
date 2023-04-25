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
        <link rel="stylesheet" href="/src/components/productComponent/styles.css">
        <article class="filter">
                <h3>${this.name}</h3>
                <h3>$ ${this.price}</h3>
                <p>${this.description}</p>
                <h4>${this.color}</h4>
                <h4>${this.model}</h4>
                <h4>${this.category}</h4>
            </article>`
    }

}

customElements.define('filter-component', FilterComponent)
export default FilterComponent;