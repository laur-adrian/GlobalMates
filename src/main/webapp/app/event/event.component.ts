import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  events = [
    {
      name: 'Music Concert',
      description: 'A live music concert featuring popular bands.',
      city: 'Los Angeles',
      date: '2024-06-15',
    },
    {
      name: 'Art Exhibition',
      description: 'An exhibition showcasing modern art from local artists.',
      city: 'New York',
      date: '2024-07-01',
    },
    {
      name: 'Tech Conference',
      description: 'A conference for technology enthusiasts and professionals.',
      city: 'San Francisco',
      date: '2024-08-20',
    },
    {
      name: 'Food Festival',
      description: 'A festival celebrating culinary delights from around the world.',
      city: 'Chicago',
      date: '2024-09-10',
    },
  ];
}
