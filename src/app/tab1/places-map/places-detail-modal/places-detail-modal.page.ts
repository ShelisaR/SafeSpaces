import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-places-detail-modal',
  templateUrl: './places-detail-modal.page.html',
  styleUrls: ['./places-detail-modal.page.scss'],
})
export class PlacesDetailModalPage implements OnInit {

    constructor(
        private navParams: NavParams,
        private modalController: ModalController
    ) { }

    ngOnInit() {
    }
        async close(){
            await this.modalController.dismiss();
        }

}