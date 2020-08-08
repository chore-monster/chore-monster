import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <p>
      heroes works!
    </p>

    <ul data-cy="hero-list">
      <li data-cy="hero">First Hero</li>
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
  constructor() {}

  ngOnInit(): void {}
}
