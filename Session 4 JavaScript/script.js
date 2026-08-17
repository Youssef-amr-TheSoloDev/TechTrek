let string = "Youssef";
let num = 2;
let isTrue = false;


let num1 = 2;
let num2 = 5;

let results = num1 + num2;

console.log(`result of ${num1} + ${num2} = ${results}`);

let calcNumber1 = Number(prompt("enter number 1 :"));
let calcOperation = prompt("enter operation: ");
let calcNumber2 = Number(prompt("enter number 2 :"));


switch(calcOperation){
    default:
    case "+":
        alert("result = " + (calcNumber1 + calcNumber2));
        break;
    case "-":
        alert("result = " + (calcNumber1 - calcNumber2));
        break;
    case "*":
        alert("result = " + (calcNumber1 * calcNumber2));
        break;
    case "/":
        if(calcNumber2 === 0)
        {
            alert("Divide by 0 error");
            break;
        }
        alert("result = " + (calcNumber1 / calcNumber2));
        break;
}