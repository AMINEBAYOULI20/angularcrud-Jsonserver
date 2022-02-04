import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient, ) { }
  
  getdata(): Observable<any> {
    const url = "http://localhost:3000/produit"
    return this.httpClient.get<any>(url);
  }
}
