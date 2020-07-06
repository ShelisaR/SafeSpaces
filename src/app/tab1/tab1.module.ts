import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from '@agm/core';
export const firebase = environment.firebase;





import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
        FormsModule,
        
        Tab1PageRoutingModule,

        AngularFireModule.initializeApp({
            apiKey: "AIzaSyAD-t3ZreMDT4Xj-QHe-1iXCaeJK8gfsj4",
            databaseURL: "https://safespaces-9dada.firebaseio.com",
        }),

            AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDNo7Wd35fI0npchlKTu2m1mkSrhVLWMtU'
        })
    
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
