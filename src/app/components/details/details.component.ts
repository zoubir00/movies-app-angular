import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  
  movieId = '';
stars=['star #1 name','star #2 name','star #3 name']
Directors=['Director #1 name','Director #2 name','Director #3 name']
Genres=['Genre #1 name','Genre #2 name','Genre #3 name']
  constructor(private _activedRoute: ActivatedRoute) {

    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
      console.log('Movie Id = '+this.movieId);

    })
  }


}
