import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfigService } from '../core/config/application-config.service';
import { UserProfileDetailsDTO } from '../models/user-profile-details-dto.model';

@Component({
  selector: 'jhi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails: UserProfileDetailsDTO = new UserProfileDetailsDTO();
  profileForm: FormGroup;
  // profileData = {
  //   firstName: 'John',
  //   userName: 'john_doe',
  //   city: 'New York',
  //   personalityTraits: ['friendly', 'organized', 'creative'],
  //   budget: 1200,
  //   roommatesPreferences: 'Non-smoker, clean, quiet',
  // };
  isEditing = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private applicationConfigService: ApplicationConfigService) {
    this.profileForm = this.fb.group({
      firstName: [{ value: this.userDetails.firstName, disabled: true }],
      userName: [{ value: this.userDetails.username, disabled: true }],
      city: [{ value: this.userDetails.city, disabled: true }],
      personalityTraits: [{ value: this.userDetails.personalityTraits, disabled: true }],
      budget: [{ value: this.userDetails.budget, disabled: true }],
      roommatesPreferences: [{ value: this.userDetails.roommatesPreferences, disabled: true }],
    });
  }

  ngOnInit(): void {
    this.http.get<UserProfileDetailsDTO>(this.applicationConfigService.getEndpointFor('user/currUserDetails')).subscribe((u: any) => {
      console.log(u);
      this.profileForm.patchValue({
        firstName: u.firstName,
        userName: u.username,
        city: u.city,
        personalityTraits: u.personalityTraits,
        budget: u.budget,
        roommatesPreferences: u.roommatesPreferences,
      });
      this.userDetails = u;
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
      this.saveChanges();
    }
  }

  saveChanges(): void {
    this.userDetails.firstName = this.profileForm.get('firstName')?.value;
    this.userDetails.username = this.profileForm.get('userName')?.value;
    this.userDetails.city = this.profileForm.get('city')?.value;
    console.log(this.profileForm.get('city')?.value);
    this.userDetails.personalityTraits = this.profileForm.get('personalityTraits')?.value;
    this.userDetails.budget = this.profileForm.get('budget')?.value;
    this.userDetails.roommatesPreferences = this.profileForm.get('roommatesPreferences')?.value;
    this.http.post<any>(this.applicationConfigService.getEndpointFor('user/details'), this.userDetails).subscribe();
  }
}
