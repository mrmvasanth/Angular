import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message:string="Current Date Time: ";
  date:string;

  constructor() { 
    setInterval(()=>{
      let currentDate=new Date(); 
      this.date=currentDate.toDateString()+'  '+currentDate.toLocaleTimeString();
    },1000)
  }

  ngOnInit() {
  }

}
