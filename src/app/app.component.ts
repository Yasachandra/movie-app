import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private gridApi;
  totalPages: Number;
  currentPage: Number;

  columnDefs = [
    {headerName: 'Movie Title', field: 'movie_title', filter: true},
    {headerName: 'Director Name', field: 'director_name', filter: true},
    {headerName: 'Actor 1 Name', field: 'actor_1_name', filter: true},
    {headerName: 'Actor 2 Name', field: 'actor_2_name', filter: true},
    {headerName: 'Genres', field: 'genres', sortable: true, filter: true},
    {headerName: 'Language', field: 'language', sortable: true, filter: true},
    {headerName: 'Country', field: 'country', sortable: true, filter: true},
    {headerName: 'Content Rating', field: 'content_rating', filter: true},
    {headerName: 'Budget', field: 'budget', sortable: true, filter: true},
    {headerName: 'Title Year', field: 'title_year', sortable: true, filter: true},
    {headerName: 'Plot Keywords', field: 'plot_keywords', filter: true},
    {headerName: 'Movie IMDB Link', field: 'movie_imdb_link', filter: true}
  ];

  rowData = [];

  constructor(private httpClient: HttpClient) {}

    ngOnInit() {
      this.httpClient.get<Movie[]>('api/movies',{
        observe:'body',
        responseType:'json'
      })
      .subscribe(
        (movies: Movie[]) => {
          let rowDataList = []
          movies.forEach(movie=>{
            rowDataList.push({movie_title:movie.movie_title,
              director_name:movie.director_name,
              actor_1_name:movie.actor_1_name,
              actor_2_name:movie.actor_2_name,
              genres:movie.genres,
              language:movie.language,
              country:movie.country,
              content_rating:movie.content_rating,
              budget:movie.budget,
              title_year:movie.title_year,
              plot_keywords:movie.plot_keywords,
              movie_imdb_link:movie.movie_imdb_link})
          });
          this.rowData = rowDataList
        }
      );
    }

    onBtNext() {
      this.gridApi.paginationGoToNextPage();
    }
  
    onBtPrevious() {
      this.gridApi.paginationGoToPreviousPage();
    }
  
    onGridReady(params) {
      this.gridApi = params.api;
    }
  
    onPaginationChanged() {
      if(this.gridApi) {
        this.currentPage = this.gridApi.paginationGetCurrentPage() + 1;
        this.totalPages = this.gridApi.paginationGetTotalPages();
      }
    }

    changeTheme() {
      let gridDiv = document.querySelector('#myGrid');
      if(gridDiv.className=='ag-theme-balham')
        gridDiv.className = 'ag-theme-balham-dark';
      else if(gridDiv.className=='ag-theme-balham-dark')
        gridDiv.className = 'ag-theme-balham';
    }
}
