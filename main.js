const categories = [
    {
        name: 'SUVs',
        cars: [{
            title: '',
            price: 123,
            model: 2020,
            image: ''
        }]
    }
]

const selectedCategory = categories[0] 

function handleCategoriesClick(event){
console.log(event.target.textContent)
}