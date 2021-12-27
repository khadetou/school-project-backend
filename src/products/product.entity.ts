import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStatus } from './product-status.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column()
  store: string;

  @Column()
  location: string;

  @Column({
    length: 10000,
  })
  description: string;

  @Column()
  price: number;

  @Column()
  rating: number;

  @Column()
  reviews: number;

  @Column()
  stock: number;

  @Column()
  status: ProductStatus;
}
