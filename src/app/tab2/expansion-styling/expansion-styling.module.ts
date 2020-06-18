import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpansionStylingPageRoutingModule } from './expansion-styling-routing.module';

import { ExpansionStylingPage } from './expansion-styling.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpansionStylingPageRoutingModule
  ],
  declarations: [ExpansionStylingPage]
})
export class ExpansionStylingPageModule {}
