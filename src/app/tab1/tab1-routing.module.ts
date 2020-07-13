import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AuthGuard} from '../guard/auth.guard'
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesMapComponent } from './places-map/places-map.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    },
    { path: 'app-places-form', component: PlacesFormComponent, canActivate: [AuthGuard] },
    { path: 'app-places-list', component: PlacesListComponent, canActivate: [AuthGuard] },
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
