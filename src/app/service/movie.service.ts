import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from '../model/movie.model'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://638492184ce192ac605bc39a.mockapi.io/Movie/';

  constructor(private http: HttpClient) { }

  getMovieId(id: string): Observable<movie> {
    return this.http.get<movie>(`${this.url}/${id}`);
  }

}
