import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstDogPage } from './first-dog.page';

describe('FirstDogPage', () => {
  let component: FirstDogPage;
  let fixture: ComponentFixture<FirstDogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
