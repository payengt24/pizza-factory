console.log('Pizza Factory');

class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients || 'cheese';

    }

    calculatePizzaCost() {
        if (this.ingredients.length == 1 && this.ingredients[0] == 'cheese') {
            this.cost = 10;
        }
        else {
            this.cost = 10 + this.ingredients.length * .99;
        }

        console.log(this.ingredients, 'cost', this.cost)
    }

}

class Order{
    constructor(items) {
        this.items = items;
        this.total = 0;

    }
    calculateEntireCost () {
        this.items.forEach(pizza => {
            pizza.calculatePizzaCost();
            this.total += pizza.cost;
        })
        console.log(`this order cost $${this.total}`)
    }
}


const pizzaOne = new Pizza();
const pizzaTwo = new Pizza(['pepper', 'bacon']);
const pizzaThree = new Pizza(['pepper', 'bacon', 'mushroom']);



pizzaTwo.calculatePizzaCost();

const orderPizza = new Order ([pizzaOne,pizzaTwo, pizzaThree]); 
orderPizza.calculateEntireCost(); //calling method for variable orderPizza


console.log(pizzaOne);
console.log(pizzaTwo);

