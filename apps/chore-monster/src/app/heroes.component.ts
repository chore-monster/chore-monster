import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <p>
      heroes works!
    </p>

    <ul data-cy="hero-list" *ngFor="let hero of heroes">
      <li routerLink="/{{ hero }}" [id]="hero" [attr.data-cy]="hero">
        {{ hero }}
      </li>
    </ul>

    <button data-cy="select-hero"></button>
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
  heroes = ['first', 'second', 'third'];
  constructor() {}

  ngOnInit(): void {}
}
