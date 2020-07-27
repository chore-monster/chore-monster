import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <p>
      heroes works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
