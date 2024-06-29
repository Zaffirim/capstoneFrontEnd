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
import { Login2Component} from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PrenotaComponent } from './prenota/prenota.component';


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
  },
  {
    path: 'prenota',
    component: PrenotaComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
    RegisterComponent,
    PrenotaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
