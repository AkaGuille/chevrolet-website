class Carousel extends HTMLElement {
    constructor() {
        super();
        this.images = [];
        this.current = 0;

    }

    giveImages(images) {
        this.images = images
        this.innerHTML = `<div>
            <img src = "${this.images[0].img} "alt= "${this.images[0].alt} "/>
        </div>`
    }

    forward() {
        if (this.current >= this.images.length) {
            this.current = 0
            this.innerHTML = `<div>
            <img src = "${this.images[this.current].img} "alt= "${this.images[this.current].alt} "/>
        </div>`
        } else {
            this.current += 1
            this.innerHTML = `<div>
            <img src = "${this.images[this.current].img} "alt= "${this.images[this.current].alt} "/>
        </div>`

        }

    }

        backward() {
            if (this.current <= 0) {
                this.current = this.images.length -1;
                this.innerHTML = `<div>
                <img src = "${this.images[this.current].img} "alt= "${this.images[this.current].alt} "/>
            </div>`
            } else {
                this.current -= 1
                this.innerHTML = `<div>
                <img src = "${this.images[this.current].img} "alt= "${this.images[this.current].alt} "/>
            </div>`
    
            }
            
    }
}

customElements.define("my-carousel", Carousel);