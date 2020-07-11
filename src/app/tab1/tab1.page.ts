import { Component, } from '@angular/core';
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
    


    constructor(private placesService: PlacesService, public auth: AuthService) { }
    places$ = this.placesService.places$;

 
 
    
    
}
