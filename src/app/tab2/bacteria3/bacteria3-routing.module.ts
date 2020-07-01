import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bacteria3Page } from './bacteria3.page';

const routes: Routes = [
  {
    path: '',
    component: Bacteria3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bacteria3PageRoutingModule {}
