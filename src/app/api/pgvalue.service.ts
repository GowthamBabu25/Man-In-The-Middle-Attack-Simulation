import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PgvalueService {
   public Pval: any;
   public Gval: any;
   public Xval: any;
  constructor() { }
  setValue(P:number,G:number){
    this.Pval=P;
    this.Gval=G;
  }

}
