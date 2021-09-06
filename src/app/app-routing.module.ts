import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { ViewUserComponent } from './Pages/view-user/view-user.component';
import  {PostsComponent } from './Pages/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'View-User', component: ViewUserComponent },
  { path: 'Posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ViewUserComponent, PostsComponent]
