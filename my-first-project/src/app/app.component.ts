import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  message:string="Type In";

  constructor(){
    this.user=new User();
    this.user.name="Vasanth";
    this.user.age=24;
    this.user.phone=['1111111','2222222'];
  }
}
