import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponent } from './posts/posts.component';
import { IntroComponent } from './intro/intro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
