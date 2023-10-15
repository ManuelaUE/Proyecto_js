import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAllcustomers() {
    return `Esta accion va a la base de datos y trae todos los consumidores`;
  }

  findOnecustomer(id: number) {
    return `This action returns a #${id} customer`;
  }

  updatecustomer(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  removecustomer(id: number) {
    return `This action removes a #${id} customer`;
  }
}
