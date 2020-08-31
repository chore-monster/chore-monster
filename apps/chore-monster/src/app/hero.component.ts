import { Component } from '@angular/core';

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>
    <h2>Chores</h2>
    <ol data-cy="chores">
      <li (click)="onChoreClicked(0)" data-cy="chore">
        Chore 0
      </li>
    </ol>
    <section *ngIf="selectedChore !== undefined" data-cy="chore-details">
      <h3>Chore Details</h3>
      <p>Chore Id: {{ selectedChore }}</p>
      <button (click)="onHideChoreClicked()" data-cy="hide-chore-details">
        Hide Details
      </button>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  selectedChore: number;

  onChoreClicked(id: number) {
    this.selectedChore = id;
  }

  onHideChoreClicked() {
    // any change
    this.selectedChore = undefined;
  }
}
