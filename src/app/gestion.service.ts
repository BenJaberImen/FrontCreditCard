import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  getAllc(){
    return this.http.get("http://localhost:8080/currencies");
  }
  
getAll(){
  return this.http.get("http://localhost:8080/cards");
}
getById(id:null){
  return this.http.get("http://localhost:8080/user/"+id);
}
cardfroms(card:any){


  return this.http.post("http://localhost:8080/sendCreditFroms",card);
}



}
