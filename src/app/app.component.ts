import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username: any;
  constructor(
    private router: Router
  ) {
    if (localStorage.getItem("user") == null) {
      this.router.navigate(["/Login"]);
    }
    else{
      this.router.navigate(['/Home']);
    }
  }

  ngOnInit() {
  }
}
