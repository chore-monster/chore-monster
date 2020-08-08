import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>
    <h2>Chores</h2>
    <ol data-cy="chores">
      <li>Chore</li>
    </ol>
  `,
  styles: [],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
