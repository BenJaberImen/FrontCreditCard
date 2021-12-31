import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardforms',
  templateUrl: './cardforms.component.html',
  styleUrls: ['./cardforms.component.css']
})
export class CardformsComponent implements OnInit {
  registerForm:any= FormGroup ;
    submitted = false;
cur:any={"id":0,"currency":""};

cards:any={};
card:any={"name":"","expirationDate":"", "cardNumber":"", "code":"", "montant":"","currencys":{"id":0,"currency":""}}
  formBuilder: any;
  constructor(private gest:GestionService , private route:Router) { 

    this.cur=localStorage.getItem("u1");
    this.cur=JSON.parse(this.cur);
  
    this.cur.currencys=this.cur;
  
    this.gest.getAllc().subscribe(
      {next: (data:any)=>{this.cards=data
      },
      error:(err:any) => { },
      complete: () => {}
      
      }
    )
    
  }

  ngOnInit(): void {
   
  }
 

 
      
  
  register(){

    this.gest.cardfroms(this.card).subscribe( 
    {next: (data:any)=>{  
     
      }

      ,
    error:(err:any) => {  
   
   },
    complete: () => {}
      })}

}
