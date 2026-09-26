// function sayHello(){
//     console.log("Hello");
// }

// const sayHello = () => {
//     console.log("Hello");
// }

// sayHello();


const Greet = (name) => {
    console.log('HELLO ' + name);
}

Greet("ali");

// let name = "manal";
// let course = "HTML";

// console.log(`${name} is learning ${course}`);



let product_name = "Laptop";
let product_price = "1200$";

console.log(`${product_name} is  ${product_price}`);


let student = {name: "youssef", level: 2, grade: 3.325};
let {name, level, grade} = student;
console.log(name);
console.log(grade);
console.log(`student ${name} is in level ${level} with ${grade} gpa`);


let product = {p_name: "laptop", p_price: 1200, p_rating: 4.2};
let new_product = {...product,  p_category: "Electronics"};
let {p_name, p_price, p_rating, p_category} = new_product;
console.log(`the ${p_name} is ${p_price}$ with ${p_rating} stars \ncat: ${p_category}`);


// arr
let colors = ["red", "blue", "green"];
let [r, b, g] = colors;
console.log(r, b, g)

let old_courses = ["html", "css"];
let new_courses = [...old_courses, "javaScript"];


console.log(
    fetch("https://jsonplaceholder.typicode.com/posts")
);