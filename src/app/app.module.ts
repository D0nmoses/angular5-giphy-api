import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { LoginComponent } from '../app/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestService } from './test.service';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'About', component: AboutComponent }
    ]
  },

  { path: 'Login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
