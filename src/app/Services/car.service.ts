import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}
 

  //subject observable
  private carNamesSubject = new BehaviorSubject<string[]>([]);
 carNames$ =this.carNamesSubject.asObservable();

  addCarName(name: string) {
    // Logic to add car name 
    console.log('Car name added:', name);
    const currentNames=this.carNamesSubject.getValue();
    const updatedNames = [...currentNames, name];
    this.carNamesSubject.next(updatedNames);
    
  }
}
