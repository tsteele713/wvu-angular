import { Component } from '@angular/core';

@Component({
  selector: 'product-configurations',
  templateUrl: `app/products/product-configurations/product-configurations.tpl.html`,
})

export class ProductConfigurationsComponent {
  pageName: string = 'Product Configurations';
  constructor() {
  }
}

