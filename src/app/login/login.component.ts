import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/events');
      }
    });
   }
  
   loginFb(){
     this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)       
     .then(
       (success) => {
         this.router.navigate(['/events']);
       }).catch(
         (err) => {
           this.error = err;
         })
   }

   loginGoogle(){
     this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(
       (success) => {
         this.router.navigate(['/events']);
       }).catch(
         (err) => {
           this.error = err;
         })
   }
  ngOnInit() {
  }

}
