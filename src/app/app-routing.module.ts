import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import {PostSingleComponent} from "./posts/post-single/post-single.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [

  {
    path: 'pages/about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'pages/contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'article/:slug',
    component: PostSingleComponent
  },{
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
