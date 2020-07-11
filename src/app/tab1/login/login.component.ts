import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    constructor(public auth: AuthService, public toastController: ToastController) { }

    async logoutAlert() {
        const toast = await this.toastController.create({
            message: 'You have successfully logged out.',
            duration: 2000
        });
        toast.present();
    }
}

