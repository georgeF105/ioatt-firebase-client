import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any>;

  constructor(
    private firebaseServie: FirebaseService
  ) { }

  ngOnInit() {
    this.user$ = this.firebaseServie.user$;
  }

  public logIn(): void {
    this.firebaseServie.logIn();
  }

  public logOut(): void {
    this.firebaseServie.logOut();
  }
}
