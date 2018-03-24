import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

import { EventService} from './services/event.service';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from'@angular/forms';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC3YW9MRfSsZPwqh6nGpMVyD8GDw0SbX9Q",
    authDomain: "firestarter-product.firebaseapp.com",
    databaseURL: "https://firestarter-product.firebaseio.com",
    projectId: "firestarter-product",
    storageBucket: "firestarter-product.appspot.com",
    messagingSenderId: "663173229064"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    NavbarComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
  ],
  providers: [AuthService,AngularFireAuth,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
