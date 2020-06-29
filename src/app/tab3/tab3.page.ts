import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // for the suggestion form
import { ToastController } from '@ionic/angular'; // for the confirmation of the form being sent

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toastController: ToastController) {}

  async alertFormSent() {
    const toast = await this.toastController.create({
      message: 'Your suggestion has been sent. Thank you!',
      duration: 2000
    });
    toast.present();
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
