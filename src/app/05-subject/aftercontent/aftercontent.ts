import {
  Component,
  ContentChildren,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-aftercontent',
  imports: [],
  templateUrl: './aftercontent.html', 
  styleUrl: './aftercontent.css',
})
export class Aftercontent implements AfterContentInit, AfterViewInit {
  @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;

  //content ellam load ahana aprom initailize ahagum
  ngAfterContentInit(): void {
    this.messageElements.forEach((element) => {
      console.log('Projected content', element.nativeElement.textContent);
      console.log(element);
    });
  }
  //focues teh input once view initialized moththa view initialized ahana aprom varum
  @ViewChild('nameInput') nameInput!: ElementRef;
  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    console.log('input focused');
  }
}
