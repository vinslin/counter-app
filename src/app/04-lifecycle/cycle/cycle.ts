import { Component, Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cycle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cycle.html',
  styleUrl: './cycle.css',
})
export class Cycle {
  @Input() items: any[] = [];

  @Input() title = '';

  viewornot: boolean = false;

  //ng on changes only works on the input properties
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('items property changes detected');
      console.log(this.items);
      console.log(changes);
    }
    //frist change thaniya edukka mudium using changes ok va
    if (changes['title']) {
      console.log('title property changes detected');
      console.log(this.title);
      console.log(changes);
    }
  }
}
