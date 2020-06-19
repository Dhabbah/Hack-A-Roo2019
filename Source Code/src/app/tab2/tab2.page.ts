import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public items: Array<{ img_url: string; name: string, url: string; }> = [];
  private ServicesList = [
    'Academics',
    'Services',
    'Library',
    'UMKC'
  ];
  private ServicesUrl = [
    '/academics',
    '/services',
    '/library',
    'https://www.umkc.edu/'
  ];
  constructor() {
    for (let i = 0; i < this.ServicesList.length; i++) {
      this.items.push({
        img_url: 'assets/tab2/' + this.ServicesList[i] + '.jpg',
        name: this.ServicesList[i],
        url: this.ServicesUrl[i]
      });
    }
  }

}
