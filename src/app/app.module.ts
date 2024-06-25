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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BrasileComponent,
    CanadaComponent
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
