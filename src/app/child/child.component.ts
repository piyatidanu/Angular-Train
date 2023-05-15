// โค้ดที่ comment คือ Workshop Train

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movie } from '../model/movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() reviews: number | undefined;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  public movie: movie | undefined;

  @Input() idMovie : string | undefined;
  @Output() Data: EventEmitter<movie> = new EventEmitter<movie>();
  
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
  }
    
  // onClick(): void {
  //   this.notify.emit('Message from child');
  // }

  getMovie(){
    if (this.idMovie) {
      this.movieService.getMovieId(this.idMovie).subscribe(res => {
        this.movie = res;
        this.Data.emit(this.movie);
      });
    }
  }

}
