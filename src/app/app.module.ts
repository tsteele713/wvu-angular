import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes} from './app.routes';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutes
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
