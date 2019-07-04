import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cdtProj';

  constructor(private router: Router) {

  }

  login() {
    //this.router.navigate(['auth/login']);
  }

  register() {
    this.router.navigate(['auth/register']);
  }
}
