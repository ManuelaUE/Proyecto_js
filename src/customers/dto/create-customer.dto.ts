export class CreateCustomerDto {
    private id: number;
    private name: string;
    private email: string;
    private address: string;

    constructor(id: number, name: string, email: string, address: string) {	
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;

    }
}