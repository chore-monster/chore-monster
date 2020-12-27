import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParchmentComponent } from './parchment.component';

describe('ParchmentComponent', () => {
  let component: ParchmentComponent;
  let fixture: ComponentFixture<ParchmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParchmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
