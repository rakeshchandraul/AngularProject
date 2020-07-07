import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './post/post.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {'path' : '', component : AppComponent, children : [
  { path: 'posts', component: PostComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
