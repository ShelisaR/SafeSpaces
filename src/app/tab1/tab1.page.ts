import { Component } from '@angular/core';
import { PlacesService } from './places.service';
import { AuthService } from 'src/app/auth.service';
import { database } from 'firebase';
import { $ } from 'protractor';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    email: string;
    password: string;

    constructor(private placesService: PlacesService, public authService: AuthService) { }
    places$ = this.placesService.places$;

    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    }

    googleLogin() {
        this.authService.loginWithGoogle();
    }

    logout() {
        this.authService.logout();
    }
}
