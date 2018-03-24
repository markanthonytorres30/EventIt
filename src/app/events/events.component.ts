import { Component, OnInit , ViewEncapsulation} from '@angular/core';

import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  events: Event[];

  editState: boolean = false;

  eventToEdit: Event;
  constructor(public eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getTasks().subscribe(events => {

      //console.log(tasks);

      this.events = events;

    });
  }

  deleteTask(event, task) {

    const response = confirm('are you sure you want to delete?');

    if (response ) {

      this.eventService.deleteTask(task);

    }

    return;

  }



  editTask(event, task) {

    this.editState = !this.editState;

    this.eventToEdit = task;

  }



  updateTask(task) {

    this.eventService.updateTask(task);

    this.eventToEdit = null;

    this.editState = false;

  }

}
