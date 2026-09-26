let student_name: string = "Ahmed";

let val: any = "Hello";

let students : string[] = ["ali", "ahmed", "manal"];
let Grades: Array<number> = [100, 200, 300];

let student: {name: string, grade: number, passed: boolean} = {name : "someone", grade: 100, passed: true};
let password: number | string;

let _status: "active" | "inactive" | "pending";
status = "active";

function func(name: string, grade: number, password: string | number, status: "active" | "inactive" | "pending"){
    return -1;
}

let user: {name: string, pass: string|number, phone?: number};

function add(a:number, b:number): number{
    return a+b;
}

function welcome(name: string, course?:string): string{
    if(course) return `${name} - ${course}`;
    return name;
}

function calculatePrice(price: number, tax: number = 0.12): number{
    return price * tax;
}

console.log(calculatePrice(120));

type student = {
    id: number,
    name: string,
    grade: number,
    pass: boolean
}

function DoSomethingToStudent(student: student){
    if(student.pass) return student.grade;
    return student.pass;
}


interface IUser{
    id: number,
    name: string,
    grade: number,
    passed: boolean
}

const user_Interface: IUser = {
    id: 1,
    name: '',
    grade: 0,
    passed: false
}

interface IProduct {
    id: number,
    name: string,
    price: number,
    inStock: boolean
}

const Products: IProduct[] = [
    {
        id: 1,
        name: 'laptop',
        price: 1000,
        inStock: true
    },
    {
        id: 2,
        name: 'laptop',
        price: 1000,
        inStock: true
    },
    {
        id: 3,
        name: 'laptop',
        price: 1000,
        inStock: true
    },
];

function ShowProduct(product: IProduct[]): IProduct[]{
    return product.filter((product) => {
        return product.inStock;
    });
}

ShowProduct(Products);


class CStudent{
    name: string = '';
    grade: number = 0;

    constructor(
        name: string,
        grade:number
    ){
        this.name = name;
        this.grade = grade;
    }


    getResult(){
        return this.grade >= 50 ? "Passed": "Failed";
    }
}


let student_1 = new CStudent("youssef", 80);
student_1.getResult();


class BankAccount{
    public ownerName: string = '';
    private balance: number = 0; // :(

    constructor(name: string, balance: number){
        this.ownerName = name;
        this.balance = balance;
    }

    public ShowBalance(): void{
        console.log(`Balance: ${this.balance}`);
    }

    public Deposit(amount: number): void{
        this.balance += amount;
    }

    public WithDraw(amount: number):void{
        this.balance -= amount;
    }
}

let account_1 = new BankAccount("Ahmed", 1000);

account_1.ShowBalance()
account_1.WithDraw(100);
account_1.ShowBalance()
account_1.Deposit(1000);
account_1.ShowBalance()

class Product{
    readonly id: number = 0;
    name: String = '';
    price: number = 0;

    constructor(
        product_id: number,
        product_name: string,
        product_price: number
    ){
        this.id = product_id;
        this.name = product_name;
        this.price = product_price;
    }

    
    public ShowProductPriceBeforeTaxes(){
        console.log(`Product Price: ${this.price}$`)
    }

    public ShowProductPriceAfterTaxes(){
        console.log(`Product Price: ${this.price * 0.12 + this.price}$`)
    }
}

let product_1 = new Product(1, "laptop", 1000);
product_1.ShowProductPriceBeforeTaxes();
product_1.ShowProductPriceAfterTaxes();


class CCStudent{
    constructor (public name: string){}
}

// class admin extends user{
//     deleteUser():void{
//         console.log("user deleted");
//     }
// }

function getFirst(items: string[]): string{
    return items[0];
}

const firstName = getFirst(["manal", "reem"])

function getFirstItem<T>(items: T[]): T{
    return items[0];
}

const firstNameGeneric = getFirstItem(["Ahmed", "Youssef"]);
const firstNumberGeneric = getFirstItem([500, 100]);

const firstProduct = getFirstItem<IProduct>([{
    id: 1,
    name: 'laptop',
    price: 1000,
    inStock: true
},
{
    id: 2,
    name: 'SunGlasses',
    price: 20,
    inStock: false
}
]);

// todo mini project
