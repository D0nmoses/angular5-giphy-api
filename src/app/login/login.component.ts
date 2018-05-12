import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  list = ["asdas", "dasds", "dq1wd1"];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    // this.authenticationService.login(this.model.username, this.model.password)
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
    if (this.username == "admin" && this.password == "123") {
      localStorage.setItem("user", this.username);
      this.router.navigate(["/Home"]);
    }
  }
}