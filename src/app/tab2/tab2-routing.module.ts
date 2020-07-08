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
        loadChildren: () => import('./covid19tracker/covid19tracker.module').then(m => m.Covid19trackerPageModule)
    },
  {
    path: 'bacteria2',
    loadChildren: () => import('./bacteria2/bacteria2.module').then( m => m.Bacteria2PageModule)
  },
  {
    path: 'bacteria3',
    loadChildren: () => import('./bacteria3/bacteria3.module').then( m => m.Bacteria3PageModule)
  },
 

    ]
            
@NgModule({
    imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
