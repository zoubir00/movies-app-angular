import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent {

  similarMovies:any[]=[
    {
      imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
      title:'Movie 1 title',
      rate:9
    },
    {
      imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
      title:'Movie #2 title',
      rate:7
    },
    {
      imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
      title:'Movie #3 title',
      rate:6
    },
    {
      imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
      title:'Movie #4 title',
      rate:3
    },
    {
      imageUrl:'https://th.bing.com/th/id/R.aa80fbed6ca71bed920e3e81db4bca2e?rik=W%2fUfg3f95v4hWQ&riu=http%3a%2f%2fwww.nitehawkcinema.com%2fwp-content%2fuploads%2f2014%2f06%2fET-The-Extra-Terrestrial-bdc9f4c5.jpg&ehk=WWs%2f0WMzih49U1ziy0zFEBBOQmbqIB7oYU9iXhwIiWs%3d&risl=&pid=ImgRaw&r=0',
      title:'Movie #5 title',
      rate:6
    },
    
  ]
}
