import { Component, Input } from '@angular/core';
import { Place } from '../places.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../places.service';

import { mapStyle } from '../../place.mapstyle';
@Component({
    selector: 'app-places-map',
    templateUrl: './places-map.component.html',
    styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent {
    @Input() places: Place[];
    places$ = this.placesService.places$;
    mapStyle = mapStyle;
   
    lat: any;
    lng: any;

    constructor(private placesService: PlacesService) {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }



      
    }
}

 