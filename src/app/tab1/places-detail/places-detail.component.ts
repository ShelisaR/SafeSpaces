import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';
@Component({
    selector: 'app-places-detail',
    templateUrl: './places-detail.component.html',
    styleUrls: ['./places-detail.component.scss'],
})
export class PlacesDetailComponent implements OnInit {
    detailsId = null;
    places$: import("C:/Users/sheli/source/repos/SafeSpaces9/src/app/tab1/models/places.model").Place;
 
    constructor(private route: ActivatedRoute, private placeService: PlacesService) { }

    ngOnInit() {
        this.detailsId = this.route.snapshot.params['id'];
        if (this.detailsId) {
            this.loadDetails();
        }
    }
    loadDetails() {
        this.placeService.getDetail(this.detailsId).subscribe(res => {
            this.places$ = res;
        });
    }
}
