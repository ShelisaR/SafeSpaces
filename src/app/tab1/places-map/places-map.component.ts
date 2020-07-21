import { Component, Input,OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Place } from '../models/places.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places.service';

import { mapStyle } from '../../place.mapstyle';
import { FormControl } from '@angular/forms';
import {  NavController, IonSearchbar } from '@ionic/angular';
import { PlacesDetailModalPage } from './places-detail-modal/places-detail-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicComponentService } from '../services/ionic-component.service';

@Component({
    selector: 'app-places-map',
    templateUrl: './places-map.component.html',
    styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent implements OnInit {
    @Input() places: Place[];
    places$ = this.placesService.places$;
    mapStyle = mapStyle;

    @ViewChild('searchbar') searchbar: IonSearchbar;
    public resultList: any[];
    public loadedResultList: any[];

    lat: any;
    lng: any;

    constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute,
        private navController: NavController,
        public router: Router, private ionicComponentService: IonicComponentService) {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }
    }


    async openPlaceDetail(id) {
        console.log("placeId" + id);
        // call loading //
        this.ionicComponentService.presentLoading();
        this.router.navigateByUrl('tabs/tab1/places-detail-modal/' + id);
        this.ionicComponentService.dismissLoading();

    }


    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    ngOnInit() {
        console.log("--------------first time loaded-------------");
        this.placesService.searchPlaces().subscribe(results => {
            console.log(results);
            this.loadedResultList = results;
        });

        let timeoutID = setTimeout(() => {
            this.searchbar.setFocus();
            console.log("setFocus()=======");
            clearTimeout(timeoutID);
        }, 200)


    }

    initializeItems(): void {
        console.log("call initialize")
        this.resultList = this.loadedResultList;
    }


    filterList(evt) {
        console.log("call filter")
        this.initializeItems();
        const searchTerm = evt.srcElement.value;
        console.log("search value=" + searchTerm);
        if (!searchTerm) {
            console.log("return>>>>");
            this.resultList = [];
            return
        }
        this.resultList = this.resultList.filter(res => {
            if (res.name && searchTerm) {
                if (res.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log("Number of result value : true");
                    return true;
                }
                console.log("Unmatch vlaue : false");
                return false;
            }
        });

    }
}



 