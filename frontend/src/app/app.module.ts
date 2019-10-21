import {HttpClientModule} from '@angular/common/http';
import {RouterModule , Routes} from   '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CountryService} from './shared/country.service'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { from } from 'rxjs';

const appRoutes:Routes=[
  {path:'' , component:ListComponent} , 
  {path:'createUpdate' , component:CreateUpdateComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateUpdateComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule ,
    AppRoutingModule , 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
