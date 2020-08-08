import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chore-monster-heroes',
  template: `
    <ul data-cy="hero-list" *ngFor="let hero of heroes; index as i">
      <li>
        <a linkTo="/heroes/{{ hero }}" [id]="i" [attr.data-cy]="hero">
          {{ hero }}
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes = ['kyle', 'amanda', 'bee', 'kit'];
  constructor() {}

  ngOnInit(): void {}
}
