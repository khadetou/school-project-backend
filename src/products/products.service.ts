import { ProductRepository } from './product.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { GetProductFilterDto } from './dto/get-product-filter.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  getProducts(fileterDto: GetProductFilterDto): Promise<Product[]> {
    return this.productRepository.getProducts(fileterDto);
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
}
