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
}
