// Importar las funciones y módulos necesarios para la prueba
import { addProduct, getCars } from './firebase.js';
import { createCardFilter, setCategory } from './app.js';

// Mockear las funciones externas
jest.mock('./firebase.js', () => ({
  addProduct: jest.fn(),
  getCars: jest.fn(),
}));

describe('Main', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="filter-container"></div>
    `;
  });

  test('createCardFilter should create card elements', () => {
    const cars = [
      { name: 'Car 1', image: 'car1.jpg', description: 'Car 1 description', price: 10000, model: 'Model 1', category: 'Category 1', color: 'Color 1' },
      { name: 'Car 2', image: 'car2.jpg', description: 'Car 2 description', price: 20000, model: 'Model 2', category: 'Category 2', color: 'Color 2' }
    ];

    createCardFilter(cars);

    const filterContainer = document.querySelector('#filter-container');
    expect(filterContainer.children.length).toBe(cars.length);
  });

  test('setCategory should set category filter option correctly', () => {
    const elem = { textContent: 'SUVs' };
    const filterOption = setCategory(elem);
    expect(filterOption).toBe('Category');
  });

  test('setCategory should set category filter option correctly for different button texts', () => {
    const categoryButtonMappings = {
      'SUVs': 'Category',
      'Trucks': 'Category',
      'Electric': 'Category',
      'Cars': 'Category',
      'Performance': 'Category',
      'Black': 'Color',
      'White': 'Color',
      'Grey': 'Color',
      'Red': 'Color',
      '2023': 'Model',
      '2022': 'Model',
      '+50000': 'Ascendent',
      '-50000': 'Descendent',
    };

    Object.entries(categoryButtonMappings).forEach(([buttonText, expectedFilterOption]) => {
      const elem = { textContent: buttonText };
      const filterOption = setCategory(elem);
      expect(filterOption).toBe(expectedFilterOption);
    });
  });

  // Agrega más pruebas según sea necesario para cubrir diferentes casos y escenarios

});