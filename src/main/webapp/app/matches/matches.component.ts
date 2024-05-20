import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent {
  matches = [
    {
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
    },
    {
      firstName: 'Charlie',
      lastName: 'Brown',
      email: 'charlie.brown@example.com',
    },
    {
      firstName: 'Dana',
      lastName: 'White',
      email: 'dana.white@example.com',
    },
  ];
}
