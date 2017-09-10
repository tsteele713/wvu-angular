import { Component } from '@angular/core';

@Component({
  selector: 'view-products',
  templateUrl: `app/products/view-products/view-products.tpl.html`,
})

export class ViewProductsComponent {
  pageName: string = 'View Products';
  constructor() {
  }
}

