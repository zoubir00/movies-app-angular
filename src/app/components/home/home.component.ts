import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // errorColor='text-danger';
  // successColor='text-success';
  // isSuccess=true;

  currentStyles:Record<string,string>={};

  IsCentered=true;
  IsSuccess=true;
  IsLarge=true;
  constructor(){
    this.currentStyles={
      'text-align': this.IsCentered ? 'center':'',
      'color': this.IsSuccess ? 'green' : 'red',
      'font-size': this.IsLarge ? 'large' : 'small',
    }
  }




}
