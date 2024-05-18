// import necessary modules
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationConfigService } from '../core/config/application-config.service';

@Component({
  selector: 'jhi-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  private http: HttpClient,
  private applicationConfigService: ApplicationConfigService) {
    // initialize form with necessary validators
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }

    // create event object from form values
    const event = {
      name: this.eventForm.value.name,
      description: this.eventForm.value.description,
      date: this.eventForm.value.date,
      city: this.eventForm.value.city
    };

    // send POST request to backend
    this.http.post<any>(this.applicationConfigService.getEndpointFor('events'), event)
      .subscribe(
        response => {
//           console.log('Event created successfully:', response);
          // reset form after successful submission
          this.eventForm.reset();
        },
        error => {
//           console.error('Error creating event:', error);
        }
      );
  }
}
