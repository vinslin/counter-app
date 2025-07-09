import { Component, signal, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../Services/highlight';

@Component({
  selector: 'app-demo',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  viewornot = false;

  toDate = new Date();
  expipes = 'hello World';
}
