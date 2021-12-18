import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  rating: number;

  @Column()
  reviews: number;

  @Column()
  stock: number;
}
