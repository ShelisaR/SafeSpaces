import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationaresourcesPageRoutingModule } from './educationaresources-routing.module';

import { EducationaresourcesPage } from './educationaresources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationaresourcesPageRoutingModule
  ],
  declarations: [EducationaresourcesPage]
})
export class EducationaresourcesPageModule {}
