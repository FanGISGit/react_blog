import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
      const config = {
    apiKey: "AIzaSyCHCSWKnF_nd8wSxJLPp-H0PA4bSaGRHx4",
    authDomain: "project-blog-cf9ba.firebaseapp.com",
    databaseURL: "https://project-blog-cf9ba.firebaseio.com",
    projectId: "project-blog-cf9ba",
    storageBucket: "project-blog-cf9ba.appspot.com",
    messagingSenderId: "405910148762"
   };
   firebase.initializeApp(config);
  }
}
