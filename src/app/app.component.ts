import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the title of the app component';
  today=new Date();

  image='https://www.themebeta.com/files/picture/201708/17/73f45bd2d270989edb29f54f98ce15fa.jpeg';
  imagewidth=200;
  sellingPrice=15.50;
  isSampleApplied=true;
  multiClasses='sample-bgColor sample-color';
  multistyles=' background-color: cyan; color: black;';
  bgcolor= 'gold';


  // event binding
  timeNow=new Date();

  setTimeNow(){
    this.timeNow=new Date();
  }
  // template variable
  pcolor='';
  setColor(_color:string){
    console.log(_color);
    this.pcolor=_color;
  }
  // two way data binding
  fullName='';
}
