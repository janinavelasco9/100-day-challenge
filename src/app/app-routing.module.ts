import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  { path: 'new-post', component: FormComponent },
  { path: 'blog', component: PostsComponent },
  { path: '', component: IntroComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }