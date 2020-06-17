import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { type } from 'os';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  sendForm(form: NgForm) {
    if (!form.valid) {
      return;
    }
    else {
      const placename = form.value.placename;
      const placetype = form.value.placetype;
      const address = form.value.address;
      const city = form.value.city;
      const state = form.value.state;
      const zipcode = form.value.zipcode;
      const comments = form.value.comments;

      // test to make sure the program is getting the correct information
      console.log(placename, placetype, address, city, state, zipcode, comments);
    }
  }
}
