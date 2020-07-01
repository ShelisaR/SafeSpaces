import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bacteria2PageRoutingModule } from './bacteria2-routing.module';

import { Bacteria2Page } from './bacteria2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bacteria2PageRoutingModule
  ],
  declarations: [Bacteria2Page]
})
export class Bacteria2PageModule {}
