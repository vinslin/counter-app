import {
  Component,
  signal,
  Signal,
  computed,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarService } from '../Services/car.service';
//import { HighlightDirective } from '../highlight';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent {
  viewornot: boolean = false;

  //  @Output() carAdded = new EventEmitter<string>();
  @Output() view = new EventEmitter<boolean>();
  carName: string = '';

  constructor(private _carService: CarService) {}

  sendView() {
    console.log('View status:', this.viewornot);

    this.view.emit(this.viewornot);
  }
  onSubmit() {
    console.log('Form submitted with car name:', this.carName);
    //sending the value outside
    //this.carAdded.emit(this.carName);

    //sending the value using car service

    this._carService.addCarName(this.carName);
    this.carName = '';
  }
}
