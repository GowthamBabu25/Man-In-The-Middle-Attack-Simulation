import { Component,OnInit } from '@angular/core';
import {PgvalueService} from "../api/pgvalue.service"
import { AttackService } from '../api/attack.service';
@Component({
  selector: 'app-attacker',
  templateUrl: './attacker.component.html',
  styleUrls: ['./attacker.component.css']
})
export class AttackerComponent implements OnInit {
  constructor(public Pgvalue:PgvalueService, public attack1:AttackService){ }
  P: any;
  G: any;
  C: any;
  D: any;
  S1: any;
  S2: any;
  intX: any;
  intY: any;
  ssa: any;
  ssb: any;
  min = 1;
  getValue(){
    this.P = this.Pgvalue.Pval;
    this.G = this.Pgvalue.Gval;
  }
  random(min:any,max:any):number{
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  randomValue(){
    this.C = this.random(this.min,this.P)
    this.D = this.random(this.min,this.G)
  }
  calIntX(){
    this.intX=(Math.pow(this.G,this.C))%this.P
  }
  calIntY(){
    this.intY=(Math.pow(this.G,this.D))%this.P
  }
  calValue(){
    this.calIntX();
    this.calIntY();
    this.attack1.setIntVal(this.intX,this.intY);
  }

  getPublicKeyValue(){
    this.S1 = this.attack1.Xval
    this.S2 = this.attack1.Yval;
  }
  calcualte(){
    this.ssa=(Math.pow(this.S1,this.C))%this.P
    this.ssb=(Math.pow(this.S2,this.D))%this.P
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
