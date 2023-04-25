// class Carousel extends HTMLElement {
//     constructor() {
//       super();
      
//       // Crea un shadow root para el componente
//       const shadow = this.attachShadow({ mode: 'open' });
      
//       // Crea los elementos del carrusel
//       const carousel = document.createElement('div');
//       carousel.classList.add('carousel');
      
//       const slide = document.createElement('div');
//       slide.classList.add('carousel-slide');
      
//       const images = Array.from(this.children);
      
//       images.forEach((img) => {
//         const slideImg = document.createElement('img');
//         slideImg.classList.add('carousel-image');
//         slideImg.src = img.src;
//         slideImg.alt = img.alt;
//         slide.appendChild(slideImg);
//       });
      
//       // Agrega los controles del carrusel
//       const controls = document.createElement('div');
//       controls.classList.add('carousel-controls');
      
//       const numControls = images.length;
      
//       for (let i = 0; i < numControls; i++) {
//         const control = document.createElement('div');
//         control.classList.add('carousel-control');
        
//         if (i === 0) {
//           control.classList.add('active');
//         }
        
//         control.addEventListener('click', () => {
//           const slideWidth = slide.offsetWidth / numControls;
//           slide.style.transform = `translateX(-${i * slideWidth}px)`;
//           Array.from(controls.children).forEach((c) => c.classList.remove('active'));
//           control.classList.add('active');
//         });
        
//         controls.appendChild(control);
//       }
      
//       // Agrega los elementos al shadow root
//       carousel.appendChild(slide);
//       carousel.appendChild(controls);
//       shadow.appendChild

//     }

// }





// class Carousel extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode: 'open'});
//         this.render();

//     }

//     render () {
//         this.shadowRoot.innerHTML = `

//         <div id="container-slider">

//         <div class="slider" id="slider">

//             <!--Imagen1 BOLT EUV-->

//             <div class="slider__section">
//                 <div class="containerja"></div>
//                 <img src="https://assets.static-gm.com/Assets/63a90616-1fa5-40c9-814a-17f4de353956/a7e32d73-c4aa-4142-a0f6-0cde1af569e9/v-1645558907/Desktop.webp"
//                     alt="" class="slider__img1">
//                 <h1>CHEVROLET ONIX</h1>
//                 <p>A suburban sports car</p>
//                 <button id="btn-services">Learn</button>

//             </div>

//             <!--Imagen2 CORVETTE-->

//             <div class="slider__section">
//                 <img src="https://www.valleychevy.com/wp-content/uploads/2021/11/color-picker_0001_22CHSpark-Summit-White.png"
//                     alt="" class="slider__img2">
//                 <h1>SPARK</h1>
//                 <p>The future of ecologycal vehicles</p>
//                 <button id="btn-services">Learn</button>


//             </div>

//             <!--Imagen3 CAMARO-->

//             <div class="slider__section">
//                 <img src="https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/6905cfd6-7a9e-426a-9544-7e1a634c8c8e/v-1621478869/Desktop.png"
//                     alt="" class="slider__img3">
//                 <h1>CHEVROLET CAMARO ZL1</h1>
//                 <p>Full of V8 power with rear wheel drive</p>
//                 <button id="btn-services">Learn</button>
//                 <div class="slider__btn slider__btn--right" id="btn-right">&#62;</div>
//                 <div class="slider__btn slider__btn--left" id="btn-left">&#60;</div>

//             </div>
            
//             <!--Imagen4 SILVERADO-->
//             <div class="slider__section">
//                 <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/trucks/silverado-ld/01-images/trims/png/2023-silverado1500-cc10543-1lt-gxd-trimselector.png?imwidth=960"
//                     alt="" class="slider__img4">
//                 <h1>SILVERADO TRUCK</h1>
//                 <p>A giant american truck</p>
//                 <button id="btn-services">Learn</button>

//             </div>

//         </div>


//     </div>  
        
//         `
//     }
// }


// customElements.define("my-carousel", Carousel);
// export default Carousel;