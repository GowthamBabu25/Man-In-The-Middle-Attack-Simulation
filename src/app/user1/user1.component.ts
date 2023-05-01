import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {PgvalueService} from "../api/pgvalue.service"
import { AttackService } from '../api/attack.service';
@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit{
  constructor(public Pgvalue:PgvalueService, public attack1: AttackService){ }
  P: any;
  G: any;
  A: any;
  X: any;
  RecB:any;
  Shared1:any;
  submit(){
    this.Pgvalue.setValue(this.P,this.G)
  }
  calX(){
    this.X=(Math.pow(this.G,this.A))%this.P;
    this.attack1.setXVal(this.X);
  }
  calculate(){
    this.RecB=this.attack1.intXval;
    this.Shared1=(Math.pow(this.RecB,this.A))%this.P;
  }
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }


}
