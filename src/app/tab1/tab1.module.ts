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

        AngularFireModule.initializeApp(firebase),
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsKey

        })
    
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
