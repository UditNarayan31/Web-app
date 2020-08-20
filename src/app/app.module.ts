import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigService } from './config.service';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { CartComponent } from './cart/cart.component';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsModule } from './modules/products/products.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFondPageComponent } from './not-fond-page/not-fond-page.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import {AuthGuard} from 'src/app/core/auth.guard';
import { AdminAuthenticationService } from 'src/app/admin/services/admin-authentication.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminChartComponent } from './admin/admin-chart/admin-chart.component';
import { ProductComponent } from './admin/product/product.component';
import { UploadFormComponent } from './admin/upload-form/upload-form.component';
import { ContactListComponent } from './admin/crud/contact-list/contact-list.component';
import { CustomerComponent } from './admin/crud/customer/customer.component';
import { CotactService } from './admin/crud/cotact.service';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { OrderComponent } from './admin/order/order.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CoupanComponent } from './admin/coupan/coupan.component';

let config = new AuthServiceConfig([
  
  
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("378578336151-2e84bss75kp699ivffbprtslmv7a8pk2.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    ServiceDetailComponent,
    CartComponent,
    TermsComponent,
    PrivacyComponent,
    AdminComponent,
    ChartComponent,
    OrdersComponent,
    DashboardComponent,
    NotFondPageComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminChartComponent,
    ProductComponent,
    UploadFormComponent,
    ContactListComponent,
    CustomerComponent,
    DetailServiceComponent,
    CartComponentComponent,
    OrderComponent,
    CheckoutPageComponent,
    CoupanComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule ,
    AngularFireStorageModule,
    SocialLoginModule,
    HttpClientModule,
    ProductsModule,
    BrowserAnimationsModule,
   
   
  ],
  providers: [ConfigService,CotactService, 
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AdminAuthenticationService,
    AuthGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
