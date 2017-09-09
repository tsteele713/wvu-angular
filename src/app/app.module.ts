import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes} from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { LandingModule } from './landing/landing.module';
@NgModule({
  imports:      [ BrowserModule,
                  LandingModule,
                  RouterModule.forRoot(AppRoutes)
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
