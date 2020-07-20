import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesDetailModalPageRoutingModule } from './places-detail-modal-routing.module';

import { PlacesDetailModalPage } from './places-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesDetailModalPageRoutingModule
  ],
  declarations: [PlacesDetailModalPage]
})
export class PlacesDetailModalPageModule {}
