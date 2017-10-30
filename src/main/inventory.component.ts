import { Component } from '@angular/core';

@Component({
  selector: 'inventory-component',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Accessories', 'Hat'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        29.99
      ),
      new Product(
        'NiceHat',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hat'],
        29.99
      )
    ]
  }

  productWasSelected(product: Product): void{
    console.log("Product clicked: ", product);
  }

}
