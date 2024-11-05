import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
},
{
    path: 'order', component: PlaceOrderComponent
}];
