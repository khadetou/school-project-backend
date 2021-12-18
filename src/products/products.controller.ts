import { GetProductFilterDto } from './dto/get-product-filter.dto';
import { ProductsService } from './products.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query() filterDto: GetProductFilterDto): Promise<Product[]> {
    return this.productsService.getProducts(filterDto);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }
}
