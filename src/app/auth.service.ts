import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string) {
    this.firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('success', value);
    })
    .catch(err => {
      console.log('fail', err.message);
    });
  }
  login(email: string, password: string) {
    this.firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('it working');
    })
    .catch(err => {
      console.log('fail', err.message);
    });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
