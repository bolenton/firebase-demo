import { Component } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;

  constructor(db: AngularFireDatabase) {
    db.list('/courses') 
      .subscribe(response =>  {
        this.courses = response;
        console.log(response)
      })
    
  }
}
