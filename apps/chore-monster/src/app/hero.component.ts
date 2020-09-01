import { Component } from '@angular/core';

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>
    <h2>Chores</h2>
    <ol data-cy="chores">
      <li
        *ngFor="let chore of chores; index as i"
        (click)="onChoreClicked(i)"
        data-cy="chore"
      >
        {{ chore }}
      </li>
    </ol>
    <section *ngIf="selectedChore !== undefined" data-cy="chore-details">
      <h3>Chore Details</h3>
      <p>Chore Index: {{ selectedChore }}</p>
      <button (click)="onHideChoreClicked()" data-cy="hide-chore-details">
        Hide Details
      </button>
    </section>
    <section>
      <label>Chore Description</label>
      <input #newChore data-cy="describe-new-chore" />
      <button
        (click)="onSubmitNewChore(newChore.value)"
        data-cy="submit-new-chore"
      >
        Submit New Chore
      </button>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  chores = ['Chore 0'];
  selectedChore: number;

  onSubmitNewChore(newChore: string) {
    this.chores.push(newChore);
  }

  onChoreClicked(id: number) {
    this.selectedChore = id;
  }

  onHideChoreClicked() {
    // any change
    this.selectedChore = undefined;
  }
}
