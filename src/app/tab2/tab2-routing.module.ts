import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

import { Tab2HomeComponent } from './tab2-home/tab2-home.component';
import { GermsDetailComponent } from './germs-detail/germs-detail';
import { GermsDetailProviderComponent } from '/germs-detail-provider/germs-detail-provider';
const routes: Routes = [
    {
        path: 'Tab2',
        component: Tab2Page,
        children: [
            {
                path: '',
                component: Tab2Home,
                children: [
                    {
                        path: '',
                        component: GermsDetail,
                        children: [
                            {
                                path: ':id',
                                component: GermsDetailProvider
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
