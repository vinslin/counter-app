import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aftercontent } from './aftercontent';

describe('Aftercontent', () => {
  let component: Aftercontent;
  let fixture: ComponentFixture<Aftercontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftercontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aftercontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
