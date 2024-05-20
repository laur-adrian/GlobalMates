import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'jhi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileForm: FormGroup;
  profileData = {
    firstName: 'John',
    userName: 'john_doe',
    city: 'New York',
    personalityTraits: ['friendly', 'organized', 'creative'],
    budget: 1200,
    roommatesPreferences: 'Non-smoker, clean, quiet',
  };
  isEditing = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [{ value: this.profileData.firstName, disabled: true }],
      userName: [{ value: this.profileData.userName, disabled: true }],
      city: [{ value: this.profileData.city, disabled: true }],
      personalityTraits: [{ value: this.profileData.personalityTraits.join(', '), disabled: true }],
      budget: [{ value: this.profileData.budget, disabled: true }],
      roommatesPreferences: [{ value: this.profileData.roommatesPreferences, disabled: true }],
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
    this.profileData.firstName = this.profileForm.get('firstName')?.value;
    this.profileData.userName = this.profileForm.get('userName')?.value;
    this.profileData.city = this.profileForm.get('city')?.value;
    this.profileData.personalityTraits = this.profileForm
      .get('personalityTraits')
      ?.value.split(',')
      .map((trait: string) => trait.trim());
    this.profileData.budget = this.profileForm.get('budget')?.value;
    this.profileData.roommatesPreferences = this.profileForm.get('roommatesPreferences')?.value;
  }
}
