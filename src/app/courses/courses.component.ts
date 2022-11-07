import { Component } from '@angular/core';
import { courses } from "../courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  courses = courses;
}
