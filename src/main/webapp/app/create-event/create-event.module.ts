import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { CREATE_EVENT_ROUTE } from './create-event.route';
import { CreateEventComponent } from './create-event.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([CREATE_EVENT_ROUTE])],
  declarations: [CreateEventComponent],
})
export class CreateEventModule {}
