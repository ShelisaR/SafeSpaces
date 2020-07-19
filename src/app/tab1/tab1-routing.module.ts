import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AuthGuard} from '../guard/auth.guard'
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesMapComponent } from './places-map/places-map.component';
import { PlacesDetailComponent } from './places-detail/places-detail.component';



const routes: Routes = [
    {
        path: '',
        component: Tab1Page,
        pathMatch: 'full'
    },
    {

        path: 'details/:id',
        component: PlacesDetailComponent,
       
    },
            
        
    { path: 'app-places-form', component: PlacesFormComponent, canActivate: [AuthGuard] },
    { path: 'app-places-list', component: PlacesFormComponent, canActivate: [AuthGuard] },
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
