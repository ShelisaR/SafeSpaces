import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2HomeComponent } from './tab2-home/tab2-home.component';
import { GermsDetailComponent } from './germs-detail/germs-detail';
import { GermsDetailProviderComponent } from '/germs-detail-provider/germs-detail-provider';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
    declarations:
    [
    Tab2Page,
    Tab2Home,
    GermsDetail,
    GermsDetailProvider
    ]
})
export class Tab2PageModule {}
