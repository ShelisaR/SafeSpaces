import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid19trackerPageRoutingModule } from './covid19tracker-routing.module';

import { Covid19trackerPage } from './covid19tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        IonicModule,
       
        Covid19trackerPageRoutingModule


  ],
    declarations: [Covid19trackerPage],
    
    exports: [Covid19trackerPage]
})
export class Covid19trackerPageModule {}
