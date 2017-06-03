import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

  public logIn(): void {
    this.userService.logIn();
  }

  public logOut(): void {
    this.userService.logOut();
  }
}
