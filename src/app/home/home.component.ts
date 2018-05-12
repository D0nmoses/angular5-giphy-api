import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  values: any;
  value: any;
  username: any;
  searchWord: string;
  limit: string;
  gifs: any;
  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    // if (localStorage.getItem("user")==null) {
    //   this.router.navigate(["/Login"]);
    // }

    this.username = localStorage.getItem("user");
  }
  logOut() {
    localStorage.removeItem("user");
    this.router.navigate(["/Login"]);
  }


  getValues() {
    this.testService.getValues().subscribe(values => this.values = values);
    console.log(this.values);
  }
  getValue() {
    this.testService.getValue(this.id).subscribe(value => this.value = value);
  }
  getCategories() {
    this.testService.getCategories().subscribe(values => this.values = this.value);
  }
  getGifs() {
    this.testService.getGifs(this.searchWord, this.limit).subscribe(gif => {
      console.log(gif);
      this.gifs=gif.data;
    });
  }
}