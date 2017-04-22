import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from 'app/firebase/firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBuVD5OXCSQiHmhB_MENyY-en2YVrm9mbc',
  authDomain: 'angle-control.firebaseapp.com',
  databaseURL: 'https://angle-control.firebaseio.com',
  projectId: 'angle-control',
  storageBucket: 'angle-control.appspot.com',
  messagingSenderId: '991417158966'
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [],
  providers: [
    FirebaseService
  ]
})
export class FirebaseModule { }
