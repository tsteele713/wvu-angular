import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent }  from './products.component';
import { ViewProductsModule }  from './view-products/view-products.module';
import { ProductConfigurationsModule }  from './product-configurations/product-configurations.module';

@NgModule({
  imports:      [
                  ViewProductsModule,
                  ProductConfigurationsModule,
                  CommonModule
                ],
  declarations: [ ProductsComponent ],
  bootstrap:    [ ProductsComponent ]
})
export class ProductsModule { }
