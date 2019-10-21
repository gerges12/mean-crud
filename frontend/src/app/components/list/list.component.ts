import { Component, OnInit } from '@angular/core';
import {CountryService} from  '../../shared/country.service';
import{Country}  from '../../country' ;
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private countries:Country[] ;


  constructor(private _CountryService:CountryService , private router:Router) { }

  ngOnInit() {
    this.readCountreis() ;
  }
  readCountreis(){
    this._CountryService.readCountry().subscribe(
      data=>{
        console.log("hg", data) ;
        this.countries= data["message"] ;
      } ,
      error=>{
        console.log("error"+ error) ;
      }

    ) ;
  }


  doUpData(country){
     this._CountryService.setter(country) ;
     this.router.navigate(['/createUpdate'])

  }
  delete(country){
    this._CountryService.deleteCountry(country._id).subscribe(
      data=>{
        this.countries.splice(this.countries.indexOf(country),1)
      } ,
      error=>{
        console.log(error) ;
      })
     

  }


}
