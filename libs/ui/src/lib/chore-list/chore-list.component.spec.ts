import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChoreListComponent } from './chore-list.component';

describe('ChoreListComponent', () => {
  let component: ChoreListComponent;
  let fixture: ComponentFixture<ChoreListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
