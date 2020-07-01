import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bacteria3PageRoutingModule } from './bacteria3-routing.module';

import { Bacteria3Page } from './bacteria3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bacteria3PageRoutingModule
  ],
  declarations: [Bacteria3Page]
})
export class Bacteria3PageModule {}
