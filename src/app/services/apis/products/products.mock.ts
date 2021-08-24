import { ProductDto } from './product.dto';
import { ProductsDto } from './products.dto';

export const MockedProductDtos = (): ProductsDto => {
  return {
    products: [
      <ProductDto>{
        id: '1',
        name: 'Product name 1',
        isDeleted: false,
        dateCreated: '2021-08-23T11:01:04Z',
        dateModified: '2021-08-23T11:01:04Z'
      },
      <ProductDto>{
        id: '2',
        name: 'Product name 2',
        isDeleted: false,
        dateCreated: '2021-08-23T11:01:04Z',
        dateModified: '2021-08-23T11:01:04Z'
      }, <ProductDto>{
        id: '3',
        name: 'Product name 3',
        isDeleted: false,
        dateCreated: '2021-08-23T11:01:04Z',
        dateModified: '2021-08-23T11:01:04Z'
      }, <ProductDto>{
        id: '4',
        name: 'Product name 4',
        isDeleted: false,
        dateCreated: '2021-08-23T11:01:04Z',
        dateModified: '2021-08-23T11:01:04Z'
      }, <ProductDto>{
        id: '5',
        name: 'Product name 5',
        isDeleted: false,
        dateCreated: '2021-08-23T11:01:04Z',
        dateModified: '2021-08-23T11:01:04Z'
      }
    ]
  }
}
