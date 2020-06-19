import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    public currentUser;
    public email;
    public name;
    public FirstName = '';
    public LastName = '';
    public Email = '';
    public Address1 = '';
    public City = '';
    public State = '';
    public ZIP = '';
    public API_KEY = 'AIzaSyDPG9vOhnT8g_NYQ33bQocDWS8l7AH4AT0';
    public result: any;
    public image: '../assets/img/avatar6.png';
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase,
                public navCtrl: NavController, private http: HttpClient) {
        this.afAuth.authState.subscribe(
            (auth) => {
                this.email = auth.email;
                if (auth != null) {
                    this.db.object('Profile/' + auth.uid).valueChanges().subscribe(
                        data => {
                            this.currentUser = data;
                            this.FirstName = this.currentUser.FirstName;
                            this.LastName = this.currentUser.LastName;
                            this.Address1 = this.currentUser.Address1;
                            this.City = this.currentUser.City;
                            this.State = this.currentUser.State;
                            this.ZIP = this.currentUser.ZIP;
                        });
                }
            });
    }

    ngOnInit() {
    }

    show() {
        this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' +
            this.LastName + '+' + this.FirstName + '&key=' + this.API_KEY + '&limit=1&indent=True')
            .subscribe((result) => {
                this.result = result;
                this.image = this.result.itemListElement[0].result.image.contentUrl;
            });
    }

    UpdateStudentP() {
        // this if statement is for error handling
        if (!this.FirstName || !this.LastName
            || !this.Address1 || !this.State
            || !this.City || !this.ZIP
        ) {
            alert('Please Enter a valid information.');
        } else {
            // This is for getting the information from the page and update it to firebase
            this.afAuth.authState.subscribe(
                (authentication) => {
                    // profile is the collection in firebase, and update is the function used for updating the information
                    this.db.object('Profile/' + authentication.uid).update({
                        FirstName: this.FirstName,
                        LastName: this.LastName,
                        Address1: this.Address1,
                        State: this.State,
                        City: this.City,
                        ZIP: this.ZIP
                    });
                });
            alert('Updating Successful.');
        }
    }
}
