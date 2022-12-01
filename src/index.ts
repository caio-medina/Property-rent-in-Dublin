export class Formulario{
    name: string;
    surname: string;
    email: string;
    sex: string;
    location: string;
    price: string;
    radius: string;
    sharedrooms: string;
    beds: string;
    beths: string;
    constructor(name: string, surname: string, email: string, 
        sex: string, location: string, price: string, 
        radius: string, sharedrooms: string, beds: string, beths: string){
		
        this.name = name;
		this.surname = surname;
		this.email = email;
        this.sex = sex;
		this.location = location;
		this.price = price;
        this.radius = radius;
		this.sharedrooms = sharedrooms;
		this.beds = beds;
        this.beths = beths;
	}
}
