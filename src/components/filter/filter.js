class SectionComponent extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title');
        this.render();    
    }
    
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/sectionComponent/styles.css">
        <h2 class="section-title">${this.title}</h2>`
    }
    
    }
    
    customElements.define('section-component', SectionComponent)
    export default SectionComponent;