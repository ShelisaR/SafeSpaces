import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesDetailModalPage } from './places-detail-modal.page';

const routes: Routes = [
  {
    path: '',
        component: PlacesDetailModalPage,
        pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesDetailModalPageRoutingModule {}
