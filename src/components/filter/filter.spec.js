// Importa el componente FilterComponent
import FilterComponent from './filter.js';

// Crea un elemento FilterComponent
const filterComponent = new FilterComponent();

// Define los valores de prueba para los atributos
const testName = 'Car Name';
const testImage = 'car-image.jpg';
const testDescription = 'Car description';
const testPrice = '10000';
const testModel = 'Car Model';
const testCategory = 'Car Category';
const testColor = 'Car Color';

// Cambia los atributos del componente
filterComponent.attributeChangedCallback('name', null, testName);
filterComponent.attributeChangedCallback('image', null, testImage);
filterComponent.attributeChangedCallback('description', null, testDescription);
filterComponent.attributeChangedCallback('price', null, testPrice);
filterComponent.attributeChangedCallback('model', null, testModel);
filterComponent.attributeChangedCallback('category', null, testCategory);
filterComponent.attributeChangedCallback('color', null, testColor);

// Verifica el resultado del renderizado
console.log(filterComponent.innerHTML);