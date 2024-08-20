import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DogCardComponent } from './dog-card.component';

describe('DogCardComponent', () => {
  let component: DogCardComponent;
  let fixture: ComponentFixture<DogCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DogCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
