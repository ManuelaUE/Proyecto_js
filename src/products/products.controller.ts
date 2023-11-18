import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly servidordeproductos: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.servidordeproductos.createproduct(createProductDto);
  }

  @Get()
  findAll() {
    return this.servidordeproductos.findAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servidordeproductos.findOneproduct(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.servidordeproductos.updateproduct(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servidordeproductos.removeproduct(+id);
  }
}
