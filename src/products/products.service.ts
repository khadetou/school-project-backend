import { ProductRepository } from './product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
  }
}
