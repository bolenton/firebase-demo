import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any>;
  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
     this.courses$ = db.list('/courses');
     this.course$ = db.object('/courses/1')
     this.author$ = db.object('/Authors/1')
  }

  add(course: HTMLInputElement){
    let test = {
      Capacity: 45,
      ID: 7,
      Instructor: "Larry Drill",
      Subject: "Math"
    }

    this.courses$.push(course.value)
      .then(response => {
        alert("DONE")
      })
      course.value = ''
    }

    
    update(course){
      // Update the properties identified. This will be the one we usually want to use 
      this.db.object('courses/'+ course.$key).update({
        Subject: "PE", 
        Capacity: 27
      })

      // Update data in fire base using set will do a complete change of the refrenced object
      // this.db.object('courses/'+ course.$key).set({
      //   ID: 9, 
      //   Instructor: "Bob Lee", 
      //   Subject: "Computer", 
      //   Capacity: 5
      // })
    }

    remove(course){
      this.db.object('courses/'+ course.$key).remove()
        // Since these methods return a promise we can create a callback using then function. 
        .then(response => {
          alert("Deleted")
        })
    }
}
