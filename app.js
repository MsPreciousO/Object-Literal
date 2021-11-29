// 0
// Create an object named computer that has three properties: speed with a value of “4GHZ”,
// hd with a value of “500GB”, and ram with a value of “8GB”. Use object literal notation.
// Using console.log() displays the value of each property.
// add another property named owner which is also an object.
// The owner object has 2 properties name and location
// assign string values of your choice to these properties
// Use console.log to print the owner property
// Use console.log to print the value of the name property of the owner object
// Use console.log to print the computer object


// const owner = {
//     name: 'Opal',
//     location: 'Frostbite Lane',
// }

// const computer = {
//     speed: "4GHZ",
//     hd: "500GB",
//     ram: "8GB",
//   // ...owner
//     specs: function() {
//         console.log(`My computer's specs are SPEED: ${this.speed}, RAM: ${this.ram} and HD: ${computer.hd}`)
//     },
//     owner: {
//         name: ['Opal Mullings'],
//         location: 'Frostbite Lane',
//         info: function() {
//             console.log(`This computer belongs to NAME: ${this.name}, who resides at LOCATION: ${this.location}`)
//         },
//     }

// }
// ----------------------OR ------------------------

// const owner = {
//     name: 'Opal',
//     location: 'Frostbite Lane',
// }
// const computer = {
//     speed: "4GHZ",
//     hd: "500GB",
//     ram: "8GB",
//   ...owner
// }
// console.log(computer.speed)
// console.log(computer.hd)
// console.log(computer.ram)
// // can we put an object within an object?
// console.log(owner)
// console.log (owner.name)
// console.log(computer)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  1
//  Create an object named pizza.
//  This object has 4 properties toppings, crust, serves, makePizza
//  The value of toppings is an array of 3 type string elements of your choice.
//  The value of the crust is a string of your choice.
//  The value of serves is of type number.
//  makePizza is a method which prints the values of the toppings array
//  Use console.log() to call the makePizza method in this object
//  define a variable named keys and assign the Object.keys() method to it.
//  Use console.log() to print the keys variable. it should show all the object's properties


const pizza = {
    toppings: ['pineapple', 'spinach', 'chicken'],
    crust: 'thincrust',
    serves: 4,
    makePizza: function (){
     return `${this.toppings[0]} ${pizza.toppings[1]} ${this.toppings[2]}`,
    }
}
//-------------------------------- OR ---------------------------------
// console.log(pizza.makePizza());








//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  2
//  1.Write a JavaScript program that creates an object called student.
//  2.The student object has 4 properties name, class, rollno, and printName
//  3. Give any values of your choice to the first 3 properties.
//  The printName property is a function which uses console.log to print the name of the student
//  Use console.log() to print the value of the class property.
//  Use console.log()to call the printName function.
//  add another property age to the student object. This property has a value of 24.
//  Use console.log() to print this modified object.
 
// const student = {
//     name: 'Charlina',
//     class: 'Advanced Level',
//     rollno: 19,
//     printName: function() {
//         return `$(this.name)`, 

// Instructions to Go to the console type student.printName(); to call the student's name
// Go to the console type student.class - to call the class
// To add the age type in the console student.age = 24;
// type student; in the console to call  
//     } 
// }

// --------------------------------------- OR ----------------------------------------
// console.log(student.printName());
// console.log(student.class)
// student.age = true;
// console.log(student)






//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  3
//  1. Create an object named book using object literal syntax
//  2. Add a title property to the book object and assign it a string value
//  3. Add an author property to the book object and assign it a string value
//  4. Add a publish_year to the book object and assign it a number to represent the year the book was published


// const book = {
//     title: 'The Life and Dreams of Precious',
//     author: 'Amazing One',
//     publish_year: 2030,
    
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////
//  4
//  // based on previous exercise
// Use a for-in loop to print the book object to the console so the final output looks something like this:
// title: Harry Potter and the Sorcerer's Stone
// author: J.K. Rowling
// publish_year: 1997

// const book = {
//     title: 'The Life and Dreams of Precious',
//     author: 'Amazing One',
//     publish_year: 2030, };
//  for (const property in book) {
//     console.log(`${property}: ${book[property]}`)
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5
// 1. Create an object named product, with the following 3 properties. 
// 2 Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
// Use console.log() to print this object

// const product = {
//     name: 'ONiel',
//     inventory: 278,
//     unit_price: 45.99,
// };
// for (const property in product) {
//     console.log(`${property}: ${product[property]}`)
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6
// This is a continuation of exercise 5
// 1. Create a function named addInventory(). 
// 2.The function should accept 2 parameters -- the product object, and the number to add to the inventory. 
// The function adjusts the product object's inventory property by adding the number passed into the function. 
// // For example, if the inventory of the product is currently 2, calling addInventory(product, 3) will set the value of inventory to 5
// 3 Add a console.log() message to the function that includes a message that looks something like this:
// "3 shoes added to the inventory"
// In this example, "shoe" is the name of the product.

// const product = {
//     name: 'ONiel',
//     inventory: 278,
//     unit_price: 45.99,
// };
// for (const property in product) {
//     console.log(`${property}: ${product[property]}`);
//     function addInventory(prodObject, num) {
//         return prodObject + 3;
//     }
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7
// 4. Create a function named processSale(). 
// The function should accept 2 parameters -- the product object you created above, and the number of products that were sold. 
// The function adjusts the product object's inventory property by subtracting the number passed into the function. 
// The function also returns the total sale which is the unit_price multiplied by the number passed into the function
// // For example, if the inventory of the product is currently 5 and the unit_price is 10, calling processSale(product, 2) will set the value of inventory to 3 and return the value of 20. 
//  Add a console.log() message to the function that includes a message that looks something like this:
// "2 chairs sold"
// In this example, "chair" is the name of the product.

// function processSale ()









//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8
//  1. Create an array named products.
//  2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
//  3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products.
// // It should return an array of just the names of the products.

//  4. Call the listProducts() function and log the returned value to the console.
// console.log(listProducts(products));

// // 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products.
// // It should return the total value of all of the products in the array.
// // You calculate the value of one product by multiplying the inventory value by the unit_price value

// 6. Call the totalValue() function and log the returned value to the console.

// const products = {

// }