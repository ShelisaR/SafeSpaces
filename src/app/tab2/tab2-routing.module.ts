import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';



const routes: Routes = [
    {
        path: '',
        component: Tab2Page,

    },
  {
    path: 'expansion-styling',
    loadChildren: () => import('./expansion-styling/expansion-styling.module').then( m => m.ExpansionStylingPageModule)
  }

];
            
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
