import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations:[moveIn(),fallIn()],
  providers:[AngularFireAuth],
  host:{'[@moveIn]':''}
})
export class EmailComponent implements OnInit {

  state: string='';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData){
    if(formData.valid){
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members'])
        }).catch(
          (err)=>{
            console.log(err);
            this.error = err;
          }
        )
    }
  }

}
