import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    console.log("homeComponent")
  }

  

}
