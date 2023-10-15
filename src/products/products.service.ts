import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  createproduct(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAllProducts() {
    return `Esta accion trae todos los productos a la base de datos`;
  }

  findOneproduct(id: number) {
    return `This action returns a #${id} product`;
  }

  updateproduct(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  removeproduct(id: number) {
    return `This action removes a #${id} product`;
  }
}
