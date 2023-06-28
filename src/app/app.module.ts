import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AddToCartComponent } from './main/add-to-cart/add-to-cart.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
