import { Component } from '@angular/core';



@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    lat: number;
    lng: number;

    constructor() { }
    ngOnInit() {
        this.getUserLocation()

    }

    private getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });

        }



    }

}