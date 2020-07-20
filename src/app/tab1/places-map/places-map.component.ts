import { Component, Input,OnInit } from '@angular/core';
import { Place } from '../models/places.model';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places.service';

import { mapStyle } from '../../place.mapstyle';
import { FormControl } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { PlacesDetailModalPage } from './places-detail-modal/places-detail-modal.page';

@Component({
    selector: 'app-places-map',
    templateUrl: './places-map.component.html',
    styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent implements OnInit {
    @Input() places: Place[];
    places$ = this.placesService.places$;
    mapStyle = mapStyle;
   
    lat: any;
    lng: any;

    public searchTerm: string = "";
    public searchControl: FormControl;
    public items: any;
    showResult = false;

    constructor(private placesService: PlacesService, private modalController: ModalController) {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }

        this.searchControl = new FormControl();
    }
    ngOnInit() {
    }


    setFilteredItems() {
        this.items = this.filterItems(this.searchTerm);
    }

    filterItems(searchTerm) {
        if (searchTerm && searchTerm.trim() !== '') {
            this.showResult = true;
            return this.places.filter(item => {
                return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            })
        }
        else {
            this.showResult = false;
        }
    }

    openFullModal(showResult) {
        this.modalController.create({
            component: PlacesDetailModalPage,

            componentProps: {
                data: this.showResult
               
               
            }
        }).then(modal => {
            modal.present();
        });
    }


}