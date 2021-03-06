import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from '../models/places.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
 
    constructor(private firestore: AngularFirestore) { }

    firestorePlacesCollection = this.firestore.collection('places');

    //READ
    places$ = this.firestorePlacesCollection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(p => {
                const place = p.payload.doc;
                const id = place.id;
                return { id, ...(place.data() as {}) } as Place;
              
            });
        })
    );

    //CREATE
    async addPlace(data: Place): Promise<void> {
        try {
            await this.firestorePlacesCollection.add(data);
        } catch (err) {
            console.log(err);
        }
    }

    //UPDATE
    async updatePlace(id: string, visited: boolean): Promise<void> {
        try {
            await this.firestorePlacesCollection
                .doc(id)
                .set({ visited: !visited }, { merge: true });
        } catch (err) {
            console.log(err);
        }
    }

    //DELETE
    async deletePlace(id: string): Promise<void> {
        try {
            await this.firestorePlacesCollection.doc(id).delete();
        } catch (err) {
            console.log(err);
        }
    }

    searchPlaces() {
        console.log("start searchPlaces");
       

        return this.firestore.collection<any>('places').snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    // get id from firebase metadata 
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

    }


    getPlaces() {
        return this.firestore.collection<any>('places').snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    // get id from firebase metadata 
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }
   
    getPlacesDetail(id: string) {
        console.log("3_____Place.Service call getPlacesDetail()");
        return this.firestore.doc<any>('places/' + id).valueChanges();

    }


}
