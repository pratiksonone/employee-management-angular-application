import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ErrorComponent } from './error/error.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SearchPipe } from './pipes/search.pipe';
import { AboutComponent } from './about/about.component';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    EmpDetailsComponent,
    ErrorComponent,
    RegistrationComponent,
    SearchPipe,
    AboutComponent,
    AlertMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbNavModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpV2SN0k5BqyVTQjTX8wU-hdCgBgktKY0',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
