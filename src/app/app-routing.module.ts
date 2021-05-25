import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NewBlogComponent} from './components/new-blog/new-blog.component';
import {ShowBlogComponent} from './components/show-blog/show-blog.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'newBlog',component:NewBlogComponent},
  {path:'showBlog',component:ShowBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
