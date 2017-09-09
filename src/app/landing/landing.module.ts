import { NgModule }      from '@angular/core';
import { LandingComponent }  from './landing.component';
import { AboutModule } from './about/about.module';

@NgModule({
  imports:      [ AboutModule ],
  declarations: [ LandingComponent ],
  bootstrap:    [ LandingComponent ]
})
export class LandingModule { }
