import { Component, OnInit, DoCheck } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Counter } from './03-Signals/counter/counter';
import { Demo } from './demo/demo';
import { FormComponent } from './form/form';
import { List } from './list/list';
import { Cycle } from './04-lifecycle/cycle/cycle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aftercontent } from './05-subject/aftercontent/aftercontent';
import { PostComponent } from './post.component/post.component';
import { NameEditor } from './05-reactive-forms/name-editor/name-editor';
import { ProfileEditor } from './05-reactive-forms/profile-editor/profile-editor';
import { HomeComponent } from './home.component/home.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
   BodyComponent,
   RouterLink
  ],
  //standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, DoCheck {
  protected title = 'counter-app';

  //list component ku anuppa
  // carNames: string[] = [];

  view: boolean = false;

  viewTransfer(viewStatus: boolean) {
    console.log('View status from app component:', viewStatus);
    this.view = viewStatus;
    // console.log('Updated view status:', this.view);
  }

  // onCarAdded(carName: string) {
  //   console.log('Car added from app component:', carName);
  //   this.carNames.push(carName);
  //   // console.log('Updated car names:', this.carNames);
  // }

  itemsList = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
    { id: 4, name: 'item4' },
  ];

  name = 'Hello Angular';
  //ngoninit hool
  msg = '';

  ngOnInit(): void {
    this.msg = 'welcome to the world of ??';
  }

  prevName = 'Hello Angular';
  //runs every minute so it can easily findout the changes
  ngDoCheck(): void {
    if (this.name != this.prevName) {
      console.log('textbox value changed');
      this.prevName = this.name;
    }
  }
}
