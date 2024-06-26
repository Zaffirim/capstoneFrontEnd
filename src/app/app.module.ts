import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrasileComponent } from './paesi/brasile/brasile.component';
import { CanadaComponent } from './paesi/canada/canada.component';
import { Login2Component } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const rotte: Route[] = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'brasile',
    component: BrasileComponent
  },
  {
    path: 'canada',
    component: CanadaComponent
  },
  {
    path: 'login',
    component: Login2Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BrasileComponent,
    CanadaComponent,
    Login2Component,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
