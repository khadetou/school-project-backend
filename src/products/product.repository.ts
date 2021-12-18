import { CreateProductDto } from './dto/create-product.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  //...

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
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
    } = createProductDto;
    const product = this.create({
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
    });
    await this.save(product);
    return product;
  }
}
