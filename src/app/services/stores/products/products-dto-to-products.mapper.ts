import { ProductDto } from '../../apis/products/product.dto';
import { ProductsDto } from '../../apis/products/products.dto';
import { Product } from './product.model';

export function mapProductsDtoToProducts(productsDto: ProductsDto): Product[] {
  const products = new Array<Product>();
  if (productsDto && productsDto.products) {
    productsDto.products.forEach((dto: ProductDto) => {
      products.push(mapProductDtoToProduct(dto));
    });
  }
  return products;
}

export function mapProductDtoToProduct(productDto: ProductDto): Product {
  const product = new Product();
  product.id = productDto.id;
  product.name = productDto.name;
  product.isDeleted = productDto.isDeleted;
  return product;
}
