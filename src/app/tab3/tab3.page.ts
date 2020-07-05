import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  
  // creates variables
  itemName = '';
  itemType = '';
  itemStreet = '';
  itemCity = '';
  itemState = '';
  itemZipCode = '';
  itemComments = '';
  items: Observable<any[]>;
  suggestionForm: FormGroup;

  // sets the database
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, public toastController: ToastController) {
    this.items = db.list('suggestions').valueChanges()

    // validation
    this.suggestionForm = fb.group({
      suggestionFormName: ['', Validators.required],
      suggestionFormType: ['', Validators.required],
      suggestionFormStreet: ['', Validators.required],
      suggestionFormCity: ['', Validators.required],
      suggestionFormState: ['', Validators.required],
      suggestionFormZipCode: ['', Validators.required],
      suggestionFormComments: ['']
    });
  }

  // pushes the form to the database
  onSubmit() {
    this.db.list('/suggestions').push({
      name: this.itemName,
      type: this.itemType,
      street: this.itemStreet,
      city: this.itemCity,
      state: this.itemState,
      zipcode: this.itemZipCode,
      comments: this.itemComments});
  
    this.alertFormSent()
  }

  async alertFormSent() {
    const toast = await this.toastController.create({
      message: 'Your suggestion has been sent. Thank you!',
      duration: 2000
    });
    toast.present();
  }

  clearForm() {
    this.suggestionForm.reset();
  }
}
