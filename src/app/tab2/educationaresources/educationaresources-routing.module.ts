import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationaresourcesPage } from './educationaresources.page';

const routes: Routes = [
  {
    path: '',
    component: EducationaresourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationaresourcesPageRoutingModule {}
