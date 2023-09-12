import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  
  movieId = '';

  constructor(private _activedRoute: ActivatedRoute) {

    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
      console.log('Movie Id = '+this.movieId);

    })
  }


}
