import { Route } from '@angular/router';

import { CreateEventComponent } from './create-event.component';

export const CREATE_EVENT_ROUTE: Route = {
  path: '',
  component: CreateEventComponent,
  data: {
    pageTitle: 'login.title',
  },
};
