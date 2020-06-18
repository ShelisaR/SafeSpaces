import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // for the suggestion form
import { AlertController } from '@ionic/angular'; // for the confirmation of the form being sent
import { type } from 'os';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}

  async alertFormSent() {
    const alert = await this.alertController.create({
      header: 'Sent successfully',
      message: 'Thank you!',
      buttons: ['OK']
    });
    await alert.present();
  }

  sendForm(form: NgForm) {
    if (!form.valid) {
      return;
    }
    else {
      this.alertFormSent();

      // gets the information from the form
      const placename = form.value.placename;
      const placetype = form.value.placetype;
      const street = form.value.street;
      const city = form.value.city;
      const state = form.value.state;
      const zipcode = form.value.zipcode;
      const comments = form.value.comments;

      // test to make sure the program is getting the correct information
      console.log(placename, placetype, street, city, state, zipcode, comments);

      form.resetForm();
    }
  }
}
