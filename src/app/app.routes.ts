import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { authGuard } from './services/auth.guard';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
},
{
    path: 'order', component: PlaceOrderComponent,
    canActivate: [authGuard]
},
{
    path: 'cart', component: CartComponent,
    canActivate: [authGuard]
}];
