import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  printToConsole(arg:any){
    console.log(arg);
  }
}
