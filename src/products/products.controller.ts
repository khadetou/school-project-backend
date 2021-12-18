import { ProductsService } from './products.service';
import { Controller } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
}
