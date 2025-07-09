import { Component, signal, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counted = signal(0);

  doubleCounted: Signal<number> = computed(() => this.counted() * 2);

  Increment() {
    this.counted.set(this.counted() + 1);
  }

  movies = [
    'man vs wiuld',
    'mudiyala',
    'popo',
    'kavitha',
    'kavitha2',
    'kavitha3',
    'kavitha4',
    'kavitha5',
    'kavitha6',
    'kavitha7',
    'kavitha8',
    'kavitha9',
    'kavitha10',
  ];
  fruits = ['pineaoole', 'apple', 'banana', 'orange'];

  conditionda = false;

  applyred = false;

  viewornot = false;
}
