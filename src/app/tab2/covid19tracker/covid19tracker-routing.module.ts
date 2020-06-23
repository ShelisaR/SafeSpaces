import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19trackerPage } from './covid19tracker.page';

const routes: Routes = [
  {
    path: '',
    component: Covid19trackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid19trackerPageRoutingModule {}
