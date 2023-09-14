import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent {
movieRates:any[]=[
  {
    rate:'7',
    review:'This p tag is going to have the review description.'+
     'Sometimes it can be very long and this is why we are using accordion',
    author:'Author',
    usefulCount:100,
    totalCount:120
  },
  {
    rate:'4',
    review:'This p tag is going to have the review description.'+
     'Sometimes it can be very long and this is why we are using accordion',
    author:'Author',
    usefulCount:100,
    totalCount:120
  },
  {
    rate:'9',
    review:'This p tag is going to have the review description.'+
     'Sometimes it can be very long and this is why we are using accordion',
    author:'Author',
    usefulCount:100,
    totalCount:120
  },
  {
    rate:'6,4',
    review:'This p tag is going to have the review description.'+
     'Sometimes it can be very long and this is why we are using accordion',
    author:'Author',
    usefulCount:100,
    totalCount:120
  },
  {
    rate:'2,8',
    review:'This p tag is going to have the review description.'+
     'Sometimes it can be very long and this is why we are using accordion',
    author:'Author',
    usefulCount:100,
    totalCount:120
  },
  
]
}
