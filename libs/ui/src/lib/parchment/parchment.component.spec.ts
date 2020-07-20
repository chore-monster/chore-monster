import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchmentComponent } from './parchment.component';

describe('ParchmentComponent', () => {
  let component: ParchmentComponent;
  let fixture: ComponentFixture<ParchmentComponent>;

  beforeEach(async(() => {
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
