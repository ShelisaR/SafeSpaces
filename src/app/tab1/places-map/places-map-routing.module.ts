import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesMapComponent } from './places-map.component';






const routes: Routes = [
    {
        path: '',
        component: PlacesMapComponent,
       
    }, 


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab1PageRoutingModule { }