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
  public title$: Observable<string>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();

    this.title$ = this.user$
      .map(user => `Hi ${user.name}`)
      .startWith('Logging in...');
  }

  public logIn(): void {
    this.userService.logIn();
  }

  public logOut(): void {
    this.userService.logOut();
  }
}
