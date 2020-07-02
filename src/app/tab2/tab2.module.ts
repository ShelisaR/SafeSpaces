import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';


import { Tab2PageRoutingModule } from './tab2-routing.module';

import { AppService } from './appservice';

import { HttpClientModule } from '@angular/common/http';










@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  
        Tab2PageRoutingModule,
        HttpClientModule,
      
  ],
    declarations: [Tab2Page],
     providers:[AppService]
})
export class Tab2PageModule {}
