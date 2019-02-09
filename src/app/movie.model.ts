export class Movie {
    public movie_title: string;
    public director_name: string;
    public actor_1_name: string;
    public actor_2_name: string;
    public genres: string;
    public language: string;
    public country: string;
    public content_rating: string;
    public budget: string;
    public title_year: string;
    public plot_keywords: string;
    public movie_imdb_link: string;
  
    constructor(movie_title: string,
        director_name: string,
        actor_1_name: string,
        actor_2_name: string,
        genres: string,
        language: string,
        country: string,
        content_rating: string,
        budget: string,
        title_year: string,
        plot_keywords: string,
        movie_imdb_link: string) {
      this.movie_title = movie_title;
      this.director_name = director_name;
      this.actor_1_name = actor_1_name;
      this.actor_2_name = actor_2_name;
      this.genres = genres;
      this.language = language;
      this.country = country;
      this.content_rating = content_rating;
      this.budget = budget;
      this.title_year = title_year;
      this.plot_keywords = plot_keywords;
      this.movie_imdb_link = movie_imdb_link;
    }
  }
  