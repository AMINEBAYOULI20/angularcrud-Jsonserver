import { Component, OnInit, ViewChild } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  produit !: any[];
  constructor(private produitservice:ProduitService) { }

  ngOnInit(): void {
    this.getbd();
  }
  getbd(){
    this.produitservice.getdata().subscribe((data)=>{
      this.produit=data
       
    });
  }
}
