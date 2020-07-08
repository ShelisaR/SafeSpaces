import { Component } from '@angular/core';
import { PlacesService } from './places.service';



@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private placesService: PlacesService) { }
    places$ = this.placesService.places$;
}
