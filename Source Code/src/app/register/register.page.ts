import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {AuthService} from '../auth.service';
import {AlertController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  UserName;
  Password;
  ConfirmPassword;
  constructor(private  router: Router, private Auth: AuthService, private firebaseA: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase,  public alertController: AlertController) { }

  ngOnInit() {
  }
  signup() {
    try {
      this.firebaseA.auth.createUserWithEmailAndPassword(this.UserName, this.Password).then(() => {
        this.firebaseA.authState.subscribe(auth => {
          // @ts-ignore
          this.FirebaseDB.object(`Profile/${auth.uid}`).set({
          }) .then();
        });
        alert('Registration Successful'); this.router.navigate(['/login']);
      }).catch(async () => {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: '',
          message: 'invalid email/password should be of 6 characters',
          buttons: ['OK']
        });
        await alert.present();
      });
    } catch (e) {
      console.error(e);
    }
  }

  register() {
    if (this.Password === this.ConfirmPassword) {

      if ((this.UserName != null) && (this.Password != null)) {
        this.signup();
      } else {alert('Please complete the form'); }

    } else {alert('Please confirm the password correctly'); }
  }

}
