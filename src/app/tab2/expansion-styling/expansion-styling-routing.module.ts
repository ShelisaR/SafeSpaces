import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpansionStylingPage } from './expansion-styling.page';

const routes: Routes = [
  {
    path: 'id',
    component: ExpansionStylingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpansionStylingPageRoutingModule {}
