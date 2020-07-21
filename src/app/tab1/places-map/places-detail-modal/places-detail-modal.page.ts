import { Component, OnInit, Input } from '@angular/core';
import { Place } from './../../models/places.model';
import { PlacesService } from '../../services/places.service';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-places-detail-modal',
    templateUrl: './places-detail-modal.page.html',
    styleUrls: ['./places-detail-modal.page.scss'],
})
export class PlacesDetailModalPage implements OnInit {

    place: Observable<any>;
    id: any;
    placeArray: any = [];


    constructor(
        public placeService: PlacesService,
        private activatedRoute: ActivatedRoute,
        private navController: NavController,
        public router: Router,
  
    ) {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }


    async ngOnInit() {
        await this.getPlaceDetail();
       
    }


    ngOnDestroy() {
       
    }

    async getPlaceDetail() {

        this.place = await this.placeService.getPlacesDetail(this.id);
        // get image gallery from place doc.
        await this.place.subscribe(res => {

            this.placeArray = res;


        });


    }
}