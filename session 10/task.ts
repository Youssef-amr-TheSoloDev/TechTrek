
interface Vector2{
    x: number,
    y: number
}

class Car{
    owner: string = '';
    Brand: string = '';
    location: Vector2 = {x: 0, y: 0};
    private RegistrationNumber: string = 'AAA-0000';
    private Registered: boolean = true;


    constructor(owner_name: string ,car_brand: string, is_registered?: boolean, registration_number?: string, car_location?: Vector2){
        this.owner = owner_name;
        this.Brand = car_brand;
        this.location = car_location ?? {x: 0, y: 0};
        this.Registered = is_registered ?? false;
        this.RegistrationNumber = registration_number ?? 'AAA-0000';
    }

    ShowCarDetails(){
        console.log(
            `
            owner: ${this.owner}\t\tCar brand: ${this.Brand}\n
            Registered?: ${this.Registered}\t\t${this.Registered?'Registration number: '+ this.RegistrationNumber:""}\n
            current location: (${this.location.x}, ${this.location.y})
            `
        )
    }

    SetRegistrationNumber(number: string): void{
        this.RegistrationNumber = number;
    }

    Register(t: boolean): void{
        this.Registered = t;
    }

    IsRegistered(): boolean{
        return this.Registered;
    }
}

let Car_1 = new Car('Youssef', 'Apple');
let Car_2 = new Car('Ahmed', 'toyota', true, 'ABC-0923', {x: 30.125, y: 29.002});
let Car_3 = new Car('Mohamed', 'Honda', true, 'ZAD-1111', {x: 34.782, y: 27.253});

Car_1.ShowCarDetails();
Car_2.ShowCarDetails();

let Cars: Car[] = [Car_1, Car_2, Car_3];
let RegisteredCars = Cars.filter((car) => {
    return car.IsRegistered();
});


RegisteredCars.forEach(car=>car.ShowCarDetails())