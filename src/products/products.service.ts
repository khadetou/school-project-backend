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

  async updateProduct(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const {
      name,
      image,
      brand,
      category,
      store,
      location,
      description,
      price,
      rating,
      reviews,
      stock,
      status,
    } = createProductDto;
    const product = await this.getProductById(id);

    product.name = name || product.name;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.store = store || product.store;
    product.location = location || product.location;
    product.description = description || product.description;
    product.price = price || product.price;
    product.rating = rating || product.rating;
    product.reviews = reviews || product.reviews;
    product.stock = stock || product.stock;
    product.status = status || product.status;

    return this.productRepository.save(product);
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
  }
}
