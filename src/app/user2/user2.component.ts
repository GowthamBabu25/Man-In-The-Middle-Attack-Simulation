import { Component,OnInit } from '@angular/core';
import {PgvalueService} from "../api/pgvalue.service"
import { AttackService } from '../api/attack.service';
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit{
  constructor(public Pgvalue:PgvalueService,public attack1:AttackService){ }
  P: any;
  G: any;
  Y: any;
  B: any;
  RecA: any;
  Shared2: any;
  getValue(){
    this.P = this.Pgvalue.Pval;
    this.G = this.Pgvalue.Gval;
  }
  calY(){
    this.Y=(Math.pow(this.G,this.B))%this.P
    this.attack1.setYVal(this.Y);
  }
  calculate(){
    this.RecA=this.attack1.intYval;
    this.Shared2=(Math.pow(this.RecA,this.B))%this.P;
  }
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }

}
