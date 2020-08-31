import { Component } from '@angular/core';

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>
    <h2>Chores</h2>
    <ol data-cy="chores">
      <li (click)="onChoreClicked(0)" data-cy="chore-0">
        Chore 0
      </li>
    </ol>
    <section *ngIf="selectedChore !== undefined" data-cy="chore-detail">
      <h3>Chore Details</h3>
      <p>Chore Id: {{ selectedChore }}</p>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  selectedChore: number;

  onChoreClicked(id: number) {
    console.log('clicked', { id });
    this.selectedChore = id;
  }
}
