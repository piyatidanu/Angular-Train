// โค้ดที่ comment คือ Workshop Train

import { Component, OnInit } from '@angular/core';
import { movie } from '../model/movie.model';
import { MovieService } from '../service/movie.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // books: any[] = [{ bookReviews: 15}]
  
  // showMessage:string = '';

  // id!: string;

  input : any | undefined;
  id : string = '';
  type : string = '';
  price : Number | undefined;
  name : string = '';
  
  public movie: movie | undefined;

  constructor(
    // private movieService: MovieService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.input = this.formBuilder.group({Id: ['']});
  }

  submit(): void {
    this.id = this.input.get('Id') ?. value;
  }

  // onNotifyClicked(message: string): void{
  //   this.showMessage = message;
  // }

  // getMovie(){
  //   this.movieService.getMovieId(this.id).subscribe(res => {
  //     this.movie = res;
  //     console.log(this.movie);
  //   });
  // }

  MovieData(allMovie : movie): void {
    this.movie = allMovie;
    console.log(this.movie);
    this.id = this.movie.Movieid;
    this.type = this.movie.TypeMovie;
    this.price = this.movie.MoviePrice;
    this.name = this.movie.NameMovie ?? '';
  }
}
