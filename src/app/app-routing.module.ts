import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { CartComponent } from './cart/cart.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { NotFondPageComponent } from './not-fond-page/not-fond-page.component';
import{AuthGuard} from 'src/app/core/auth.guard'
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CoupanComponent } from './admin/coupan/coupan.component';
const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services/:productId', component: ServiceDetailComponent },
  { path: 'details/:serviceId', component:  DetailServiceComponent },
  { path: 'cart', component: CartComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'order', component:  OrdersComponent, canActivate: [AuthGuard] },
  { path: 'admin-reg', component: AdminRegisterComponent, canActivate: [AuthGuard] },
  { path: 'dash', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'cartco', component: CartComponentComponent },
  { path: 'check', component: CheckoutPageComponent },
  { path: 'admin', component: AdminComponent, 

  children: [
    {
      path: 'order', // child route path
      component: OrdersComponent,
      canActivateChild: [AuthGuard] // child route component that the router renders
    },
    {
      path: 'admin-reg',
      component:  AdminRegisterComponent,
      canActivateChild: [AuthGuard]  // another child route component that the router renders
    },
    { path: 'product', 
    component: ProductComponent,
    canActivateChild: [AuthGuard] 
     },
     { path: 'coupan', 
     component: CoupanComponent,
     canActivateChild: [AuthGuard] 
      },
    {
      path: '**',
      component:  DashboardComponent,
      canActivateChild: [AuthGuard]    // another child route component that the router renders
    },
    

  ],
  },
  { path: 'chart', component: ChartComponent },
  { path: 'order', component: OrdersComponent },
  { path: '404', component: NotFondPageComponent },
  { path: '**', redirectTo: '/404' },
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
