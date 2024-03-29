import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../../tab1/services/places.service';
import { Place } from '../../tab1/models/places.model';

@Component({
    selector: 'app-places-list',
    templateUrl: './places-list.component.html',
    styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
    @Input() places: Place[];
    constructor(private placesService: PlacesService) { }

    ngOnInit() { }

    onDelete(id: string) {
        this.placesService.deletePlace(id);
    }

    onUpdate(id: string, visited: boolean) {
        this.placesService.updatePlace(id, visited);
    }
}
