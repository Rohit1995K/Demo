import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  details: any;
  detailsInfo: any;

  constructor(private commonService : CommonService) { }

  public generes:any;
  public url:any;
  public key:any;
  public img_url:string = 'https://image.tmdb.org/t/p/w220_and_h330_face';

  ngOnInit(): void {

    this.activeList();
    this.movieList();
  }

  
  public activeList(){
    this.url = 'https://api.themoviedb.org/3/genre/28/movies';
    this.key = 'api_key=68e82445c8842ba8616d0f6bf0e97a41';

    this.commonService.getMoviewData(this.url,this.key).subscribe(resp =>{
        this.detailsInfo = resp.results;
        console.log(this.detailsInfo);
    })       
  }

  public movieList(){
    this.url = 'https://api.themoviedb.org/3/genre/movie/list';
    this.key = 'api_key=68e82445c8842ba8616d0f6bf0e97a41';
    this.commonService.getMoviewData(this.url,this.key).subscribe(resp =>{
        this.generes = resp.genres;
    })
  }

  
  public getMovieByCategory(value) { 
    this.url = 'https://api.themoviedb.org/3/genre/'+value+'/movies';
    this.key = 'api_key=68e82445c8842ba8616d0f6bf0e97a41';

    this.commonService.getMoviewData(this.url,this.key).subscribe(resp =>{
        this.details = resp.results;
        console.log(this.details);
    })    
  }

}
