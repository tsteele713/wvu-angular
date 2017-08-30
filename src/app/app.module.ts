import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes} from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(AppRoutes)
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
