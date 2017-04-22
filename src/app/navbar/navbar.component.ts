import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private firebaseServie: FirebaseService
  ) { }

  ngOnInit() {
  }

}
