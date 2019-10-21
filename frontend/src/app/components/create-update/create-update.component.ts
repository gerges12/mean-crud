import { Component, OnInit } from '@angular/core';
import {CountryService} from  '../../shared/country.service';
import{Country}  from '../../country' ;

import { Router, Route } from '@angular/router';



@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
private country:Country;
constructor(private countryService:CountryService , private router:Router) { }

  ngOnInit() {
    this.country=this.countryService.getter() ;
  }
  createOrUpdate(){
    if (this.country._id== undefined){
    this.countryService.createCountry(this.country).subscribe(
      data=>{
        console.log(data) ;
        this.router.navigate(['/']) ;
      } ,
      error=>{
        console.log(error) ;
      }
    )
 }
   else {
    this.countryService.updateCountry(this.country).subscribe(
      data=>{
        console.log(data) ;
        this.router.navigate(['/']) ;
      } ,
      error=>{
        console.log(error) ;
      }
    )
   }


  }
}
