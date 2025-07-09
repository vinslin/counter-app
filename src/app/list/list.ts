import {
  Component,
  signal,
  Signal,
  computed,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../Services/highlight';
import { CarService } from '../Services/car.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  // @Input() carNames: string[] = [];
  @Input() viewornot: boolean = false;

  //services
  carNames: string[] = [];

  constructor(private _carService: CarService) {}

  ngOnInit(): void {
    this._carService.carNames$.subscribe((names) => {
      this.carNames = names;
      console.log('Car names updated:', this.carNames);
    });
  }
}
