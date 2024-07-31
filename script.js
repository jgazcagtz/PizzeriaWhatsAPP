const pizzas = [
    { name: "Pizza Margarita", img: "https://freerangestock.com/thumbnail/145352/whole-pizza-pie.jpg", grande: 220, familiar: 370 },
    { name: "Pepperoni y Jalapeño", img: "https://freerangestock.com/thumbnail/87354/pepperoni-and-jalapeno-pizza-on-white-background.jpg", grande: 230, familiar: 380 },
    { name: "Pizza con Tomates", img: "https://freerangestock.com/thumbnail/87336/close-up-of-pizza-with-tomatoes-in-background.jpg", grande: 210, familiar: 360 },
    { name: "Pizza Clásica", img: "https://freerangestock.com/thumbnail/136746/close-up-of-pizza.jpg", grande: 240, familiar: 390 },
    { name: "Pepperoni y Aceitunas", img: "https://freerangestock.com/thumbnail/68744/pepperoni-and-black-olive-pizza-on-a-white-plate.jpg", grande: 230, familiar: 380 },
    { name: "Pizza Italiana", img: "https://freerangestock.com/thumbnail/136749/italian-pizza.jpg", grande: 220, familiar: 370 },
    { name: "Pizza en Mesa", img: "https://freerangestock.com/thumbnail/87342/close-up-of-a-pizza-on-a-table.jpg", grande: 250, familiar: 400 },
    { name: "Pizza Hawaiana", img: "https://freerangestock.com/thumbnail/145352/whole-pizza-pie.jpg", grande: 230, familiar: 380 },
    { name: "Pizza Vegetariana", img: "https://freerangestock.com/thumbnail/87336/close-up-of-pizza-with-tomatoes-in-background.jpg", grande: 210, familiar: 360 },
    { name: "Pizza BBQ Chicken", img: "https://freerangestock.com/thumbnail/136746/close-up-of-pizza.jpg", grande: 240, familiar: 390 },
    { name: "Pizza Cuatro Quesos", img: "https://freerangestock.com/thumbnail/68744/pepperoni-and-black-olive-pizza-on-a-white-plate.jpg", grande: 220, familiar: 370 },
    { name: "Pizza de Champiñones", img: "https://freerangestock.com/thumbnail/136749/italian-pizza.jpg", grande: 230, familiar: 380 },
    { name: "Pizza de Salami", img: "https://freerangestock.com/thumbnail/87342/close-up-of-a-pizza-on-a-table.jpg", grande: 240, familiar: 390 },
    { name: "Pizza de Anchoas", img: "https://freerangestock.com/thumbnail/145352/whole-pizza-pie.jpg", grande: 220, familiar: 370 },
    { name: "Pizza de Espinacas", img: "https://freerangestock.com/thumbnail/87354/pepperoni-and-jalapeno-pizza-on-white-background.jpg", grande: 210, familiar: 360 },
    { name: "Pizza de Pollo", img: "https://freerangestock.com/thumbnail/87336/close-up-of-pizza-with-tomatoes-in-background.jpg", grande: 230, familiar: 380 },
    { name: "Pizza de Atún", img: "https://freerangestock.com/thumbnail/136746/close-up-of-pizza.jpg", grande: 240, familiar: 390 },
    { name: "Pizza de Carne", img: "https://freerangestock.com/thumbnail/68744/pepperoni-and-black-olive-pizza-on-a-white-plate.jpg", grande: 220, familiar: 370 },
    { name: "Pizza de Jamón Serrano", img: "https://freerangestock.com/thumbnail/136749/italian-pizza.jpg", grande: 230, familiar: 380 },
    { name: "Pizza Mediterránea", img: "https://freerangestock.com/thumbnail/87342/close-up-of-a-pizza-on-a-table.jpg", grande: 240, familiar: 390 }
];

const pizzaGrid = document.querySelector('.pizza-grid');

pizzas.forEach(pizza => {
    const pizzaItem = document.createElement('div');
    pizzaItem.classList.add('pizza-item');
    pizzaItem.innerHTML = `
        <img src="${pizza.img}" alt="${pizza.name}">
        <h3>${pizza.name}</h3>
        <p>Grande: $${pizza.grande}</p>
        <p>Familiar: $${pizza.familiar}</p>
    `;
    pizzaGrid.appendChild(pizzaItem);
});
