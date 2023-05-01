import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttackService implements OnInit {
  Xval: any;
  Yval: any;
  intXval: any;
  intYval: any;
  constructor() { }

  setXVal(X:number){
    this.Xval=X;
  }
  setYVal(Y:number){
    this.Yval=Y;
  }
  setIntVal(intX:number,intY:number){
    this.intXval = intX;
    this.intYval = intY;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
