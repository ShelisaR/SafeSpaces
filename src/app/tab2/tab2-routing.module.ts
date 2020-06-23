import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { Tab2Page } from './tab2.page';



const routes: Routes = [
    {
        path: '',
        component: Tab2Page,
    
    },  {
    path: 'educationaresources',
    loadChildren: () => import('./educationaresources/educationaresources.module').then( m => m.EducationaresourcesPageModule)
  },
 
  {
    path: 'covid19tracker',
    loadChildren: () => import('./covid19tracker/covid19tracker.module').then( m => m.Covid19trackerPageModule)
  }

    ]
            
@NgModule({
    imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
