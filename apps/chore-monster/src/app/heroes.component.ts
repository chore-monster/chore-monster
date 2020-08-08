import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <ul data-cy="hero-list" *ngFor="let hero of heroes; index as i">
      <li routerLink="/{{ hero }}" [id]="i" [attr.data-cy]="hero">
        {{ hero }}
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
