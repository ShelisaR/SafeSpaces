import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-covid19tracker',
  templateUrl: './covid19tracker.page.html',
  styleUrls: ['./covid19tracker.page.scss'],
})
export class Covid19trackerPage implements OnInit {

    countries: any;

    data: any;

    constructor(private appService: AppService,

        public loadingController: LoadingController) { }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }



    ionViewDidEnter() {

        this.getData();

    }



    search() {

        const searchbar = document.querySelector('ion-searchbar');

        const items = Array.from(document.querySelector('ion-list').children);



        searchbar.addEventListener('ionInput', handleInput);



        function handleInput(event) {

            const query = event.target.value.toLowerCase();

            requestAnimationFrame(() => {

                items.forEach((item) => {

                    const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;

                    shouldShow ? item.removeAttribute('hidden') : item.setAttribute('hidden', 'hidden');

                });

            });

        }

    }



    async getData() {

        const loading = await this.loadingController.create({

            message: 'Loading...',

            duration: 10000

        });

        await loading.present();

        this.appService.getData().subscribe(res => {

            this.data = res;

            this.countries = this.data['Countries'];

            this.countries.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1);

            loading.dismiss();

            setTimeout(() => {

                this.search();

            }, 200);

        }, (error) => {

            loading.dismiss();

        });

    }



}

