const square = function (i){
    return i * i;
}; //can create: function square(i){ return i * i; } -> can be referenced by its name

const squareArrow = (i) => { i * i }; //always anonymous

//if single return value, then new syntax possible:

const squareArrowTwo = (i) => i * i;

const firstName = (fullName) => fullName.split(' ')[0];
firstName("Fernando Alonso Diaz");

////<----- PART  TWO ----->////

//arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55,1,5001));

//56
//(3) [55, 1, 5001]

const addArrow = (a,b) => a+b;

console.log(addArrow(55,1,5001));

//REFERENCE ERROR: arguments is not defined

//this keyword no longer bound with arrow functions

const user = {
    name: "Denis",
    cities: ["Marbella", "Hamburg", "Leipzig"],
    printPlacesLived: function() {
          this.cities.forEach(function(city){
              //const that = this -> this = that below
            console.log(this.name + " has lived in " + city);
        });
    }
};

user.printPlacesLived; 

//ERROR this refers to method argument, not object.

//arrow functions dont bind their own this value, instead they use the this value of the context they were created in

const userArrow = {
    name: "Denis",
    cities: ["Marbella", "Hamburg", "Leipzig"],
    printPlacesLived: function() {
          this.cities.forEach( (city) => console.log(this.name + " has lived in " + city) );
    }
};

//works

const userArrow2 = {
    name: "Denis",
    cities: ["Marbella", "Hamburg", "Leipzig"],
    printPlacesLived() {
        this.cities.map( (city) => console.log(this.name + " has lived in " + city));
    }
};

//Challenge

const multiplier = {
    numbers: [2, 5, 6, 9, 12],
    multiplyBy(multiplier) {
        return this.numbers.map ( (number) => number * multiplier);
    }
}