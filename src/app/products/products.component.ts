import { Component } from '@angular/core';

@Component({
  selector: 'products-overview',
  templateUrl: `app/products/products.tpl.html`,
})
export class ProductsComponent  {
  viewToggle: boolean = false;
  constructor() { }
  toggleView() {
    this.viewToggle = !this.viewToggle;
  }
}
