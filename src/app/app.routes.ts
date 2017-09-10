import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { OpportunityComponent } from './opportunity/opportunity.component';

export const AppRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'productOverview', component: ProductsComponent },
  { path: 'opportunityOverview', component: OpportunityComponent }
];
