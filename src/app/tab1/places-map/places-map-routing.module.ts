import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesMapComponent } from './places-map.component';






const routes: Routes = [
    {
        path: '',
        component: PlacesMapComponent,
       
    },  {
    path: 'places-detail-modal',
    loadChildren: () => import('./places-detail-modal/places-detail-modal.module').then( m => m.PlacesDetailModalPageModule)
  },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab1PageRoutingModule { }