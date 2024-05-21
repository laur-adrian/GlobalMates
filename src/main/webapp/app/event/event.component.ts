import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from '../core/config/application-config.service';

@Component({
selector: 'jhi-event',
templateUrl: './event.component.html',
styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
events: any[] = [];

constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

ngOnInit(): void {
this.fetchEventsForCurrentUser();
}

fetchEventsForCurrentUser(): void {
const url = this.applicationConfigService.getEndpointFor('events');
this.http.get<any[]>(`${url}?forCurrentUser=true`).subscribe(
(events) => {
this.events = events;
},
(error) => {
console.error('Error fetching events:', error);
}
);
}
}
