import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes} from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LandingModule } from './landing/landing.module';
import { ProductsModule } from './products/products.module';
import { OpportunityModule } from './opportunity/opportunity.module';
@NgModule({
  imports:      [ BrowserModule,
                  LandingModule,
                  ProductsModule,
                  OpportunityModule,
                  RouterModule.forRoot(AppRoutes)
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
