import { GetProductFilterDto } from './dto/get-product-filter.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  //Get all products
  async getProducts(fileterDto: GetProductFilterDto): Promise<Product[]> {
    const { search, category, store, location, status, order } = fileterDto;
    const query = this.createQueryBuilder('product');

    if (search) {
      query.andWhere(
        '(LOWER(product.name) LIKE LOWER(:search) OR LOWER(product.brand) LIKE LOWER(:search) OR LOWER(product.store) LIKE  LOWER(:search) OR LOWER(product.category) LIKE LOWER(:search) OR LOWER(product.location) LIKE LOWER(:search) OR LOWER(product.description) LIKE LOWER(:search))',
        { search: `%${search}% ` },
      );
    }

    if (category) {
      query.andWhere('product.category = :category', { category });
    }

    if (store) {
      query.andWhere('product.store = :store', { store });
    }

    if (location) {
      query.andWhere('product.location = :location', { location });
    }

    if (status) {
      query.andWhere('product.status = :status', { status });
    }

    if (order) {
      query.orderBy(order);
    }
    query.orderBy('product.price', 'ASC');
    const products = await query.getMany();
    return products;
  }

  //Create Product
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
      status,
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
      status,
    });
    await this.save(product);
    return product;
  }
}
