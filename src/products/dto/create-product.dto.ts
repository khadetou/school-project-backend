import { IsNotEmpty } from 'class-validator';
import { ProductStatus } from '../product-status.enum';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  store: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  rating: number;

  @IsNotEmpty()
  reviews: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  status: ProductStatus;
}
