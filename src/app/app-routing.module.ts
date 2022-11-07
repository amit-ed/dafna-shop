import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CoursesComponent} from "./courses/courses.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: CoursesComponent},
  { path: 'product', component: MainComponent},
  { path: 'course', component: CoursesComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
