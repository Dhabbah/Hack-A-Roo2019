import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  bookList: any[] = [];
  bookTitle: any;
  constructor(private getHttp: HttpClient) { }

  ngOnInit() {
  }

  whenSearch() {
    this.getHttp.get('https://www.googleapis.com/books/v1/volumes?q=' + this.bookTitle)
        .subscribe((data: any) => {
          for (let i = 0; i < 5; i++) {
            this.bookList[i] = {
              title: data.items[i].volumeInfo.title,
              author: data.items[i].volumeInfo.authors,
              image: data.items[i].volumeInfo.infoLink,
              url: data.items[i].volumeInfo.imageLinks.thumbnail,
              description: data.items[i].volumeInfo.description
            };
          }
          console.log(data);
        });
  }
}
