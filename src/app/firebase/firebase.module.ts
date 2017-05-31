import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from 'app/firebase/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

// export const firebaseConfig = {
//   apiKey: 'AIzaSyBuVD5OXCSQiHmhB_MENyY-en2YVrm9mbc',
//   authDomain: 'angle-control.firebaseapp.com',
//   databaseURL: 'https://angle-control.firebaseio.com',
//   projectId: 'angle-control',
//   storageBucket: 'angle-control.appspot.com',
//   messagingSenderId: '991417158966'
// };

// const firebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Popup
// };

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    FirebaseService
  ]
})
export class FirebaseModule { }
