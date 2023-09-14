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

  IsVisible=true;
//ngFor structral directive
fanFavouriteMovies:any[]=[
  {
    imageURL:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #1 title',
    actors:[
      'Actor 1','Actor 2'
    ],
    year:'2022',
    rate:'9,5',
    ranke:'1'
  },
  {
    imageURL:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #2 title',
    actors:[
      'Actor 2','Actor 3'
    ],
    year:'2023',
    rate:'7,5',
    ranke:'2'
  },
  {
    imageURL:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #3 title',
    actors:[
      'Actor 1','Actor 2','Actor 3'
    ],
    year:'2018',
    rate:'5',
    ranke:'3'
  },
  {
    imageURL:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #4 title',
    actors:[
      'Actor 1','Actor 2','Actor 4'
    ],
    year:'2023',
    rate:'8',
    ranke:'4'
  },
]

topMovies:any[]=[
  {
    imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #1 title',
    description:'This is a lead-in to additional content. This content is a little bit longer.',
    updated:'10'
  },
  {
    imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #2 title',
    description:'This is a lead-in to additional content. This content is a little bit longer.',
    updated:'50'
  },
  {
    imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #3 title',
    description:'This is a lead-in to additional content. This content is a little bit longer.',
    updated:'65'
  },
  {
    imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
    title:'movie #4 title',
    description:'This is a lead-in to additional content. This content is a little bit longer.',
    updated:'70'
  } 
]
// ngswitch 
integerValue=30;
}
