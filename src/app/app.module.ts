import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponent } from './posts/posts.component';
import { IntroComponent } from './intro/intro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { AngularFirestore } from '@angular/fire/firestore';

const config = {
  apiKey: "AIzaSyAAgWBckC9zVrCi3FnhftJcn1i6u7xG48Q",
  authDomain: "hundred-day-challenge-blog.firebaseapp.com",
  databaseURL: "http://hundred-day-challenge-blog.firebaseio.com",
  projectId: "hundred-day-challenge-blog",
  storageBucket: "hundred-day-challenge-blog.appspot.com",
  messagingSenderId: "799237474871",
  appId: "1:799237474871:web:6831f4fb8f92f2e53e4db2",
  measurementId: "G-Q9BCGRW9LB"
}

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    PostsComponent,
    IntroComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
