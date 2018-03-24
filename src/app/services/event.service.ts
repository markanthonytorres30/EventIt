import { Injectable } from '@angular/core';

import { 

  AngularFirestore,

  AngularFirestoreCollection,

  AngularFirestoreDocument 

} from 'angularfire2/firestore';



import { Event } from '../models/event';



import { Observable } from 'rxjs/Observable';



@Injectable()

export class EventService {

  tasksCollection: AngularFirestoreCollection<Event>;

  tasks: Observable<Event[]>;

  taskDoc: AngularFirestoreDocument<Event>;



  constructor(public afs:AngularFirestore) {

    this.tasksCollection = this.afs.collection('event');

    // this.tasks = this.afs.collection('tasks').valueChanges();

    this.tasks = this.tasksCollection.snapshotChanges().map(changes => {

      return changes.map(a => {

        const data = a.payload.doc.data() as Event;

        data.id = a.payload.doc.id;

        return data;

      });

    });

  }



  getTasks() {

    return this.tasks; 

  }



  addTask(event: Event) {

    this.tasksCollection.add(event);

  }



  deleteTask(event: Event) {

    this.taskDoc = this.afs.doc(`events/${event.id}`);

    this.taskDoc.delete();

  }



  updateTask(event: Event) {

    this.taskDoc = this.afs.doc(`events/${event.id}`);

    this.taskDoc.update(event);

  }

}