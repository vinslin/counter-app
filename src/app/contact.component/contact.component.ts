import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact.component',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private router: Router) {}

  //programmatic routing
  navigateToAbout() {
    this.router.navigate(['/about/8']);
  }
}
