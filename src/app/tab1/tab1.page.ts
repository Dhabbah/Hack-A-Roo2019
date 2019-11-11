import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  newsList: any[] = [];
  constructor(private GetHttp: HttpClient) {}

    // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
      this.whenSearch();
  }
  whenSearch() {
    this.GetHttp.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Froogroups.umkc.edu%2Fevents.rss')
        .subscribe((data: any) => {
          // data.json();
          for (let i = 0; i < data.items.length; i++) {
            this.newsList[i] = {
              title: data.items[i].title,
              pubDate: data.items[i].pubDate,
              content: data.items[i].content,
              image: data.items[i].enclosure.link
            };
          }
          console.log(data);
          console.log(this.newsList);
        });
  }
}
