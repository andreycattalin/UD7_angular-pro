import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-page-movies',
  templateUrl: './page-movies.component.html',
  styleUrls: ['./page-movies.component.css']
})
export class PageMoviesComponent implements OnInit {

  myMovies: any

  constructor(private moviesService: MovieServiceService) {

  }
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
      this.myMovies = data.results;
    })
  }

}
