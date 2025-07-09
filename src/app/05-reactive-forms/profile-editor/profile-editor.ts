import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true, // ✅ Required if using `imports`
  imports: [ReactiveFormsModule, CommonModule, FormsModule], // ✅ Only valid NgModules or standalone components
  templateUrl: './profile-editor.html',
  styleUrls: ['./profile-editor.css'], // ✅ Use plural key
})
export class ProfileEditor {
  // Form fields initialization and validation also

  viewornot: boolean = false;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
