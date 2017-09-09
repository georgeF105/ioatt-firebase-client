import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService
      .getUser()
      .take(1)
      .filter(Boolean)
      .subscribe(user => {
        this.router.navigate(['devices']);
      });
  }
  public logIn (): void {
    this.userService.logIn();
  }

}
