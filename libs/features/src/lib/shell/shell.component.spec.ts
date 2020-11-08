import { TestBed, async } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
