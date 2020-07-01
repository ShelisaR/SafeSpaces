import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bacteria2Page } from './bacteria2.page';

const routes: Routes = [
  {
    path: '',
    component: Bacteria2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bacteria2PageRoutingModule {}
