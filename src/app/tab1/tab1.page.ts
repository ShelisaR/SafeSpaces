import { Component,NgModule } from '@angular/core';
import { PlacesService } from './places.service';
import { database } from 'firebase';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { $ } from 'protractor';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public isAdmin = false;
    public user = false;
    public guest = false;

    constructor(private placesService: PlacesService, public auth: AuthService) { }
    places$ = this.placesService.places$;

    ngOnInit() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .firestore()
                    .doc(`/users/${user.uid}`)
                    .get()
                    .then(usersSnapshot => {
                        this.isAdmin = usersSnapshot.data().isAdmin;
                    });
            }
        });
    }
}
