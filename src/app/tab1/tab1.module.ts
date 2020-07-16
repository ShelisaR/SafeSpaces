import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesMapComponent } from './places-map/places-map.component';



import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/tab1/services/auth.service';
import { LoginComponent } from './login/login.component';



export const firebaseConfig = environment.firebaseConfig;






@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        ReactiveFormsModule,
        Tab1PageRoutingModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        FormsModule,
      
     
     
       
        


        AngularFireModule.initializeApp(firebaseConfig),

        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsKey,
            libraries: ["places"]
        })


    ],
    declarations: [Tab1Page,PlacesListComponent,
        PlacesFormComponent,
        PlacesMapComponent,LoginComponent],
    providers:[
        AuthService
    ]

})
export class Tab1PageModule { }

