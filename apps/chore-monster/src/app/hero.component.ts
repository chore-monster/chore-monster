import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Chore {
  name: string;
}

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>

    <h2>Chores</h2>

    <section data-cy="chores" *ngIf="(chores | async).length > 0; else empty">
      <ol>
        <li
          *ngFor="let chore of chores | async; index as i"
          (click)="onChoreClicked(i)"
          data-cy="chore"
        >
          {{ chore.name }}
        </li>
      </ol>

      <section *ngIf="selectedChore !== undefined" data-cy="chore-details">
        <h3>Chore Details</h3>
        <p>Chore Index: {{ selectedChore }}</p>
        <button (click)="onHideChoreClicked()" data-cy="hide-chore-details">
          Hide Details
        </button>
      </section>
    </section>

    <ng-template #empty>
      <section data-cy="empty">
        <h3>No Chores Yet!</h3>
      </section>
    </ng-template>

    <section data-cy="add-chore">
      <h3>Add a New Chore</h3>

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
export class HeroComponent implements OnInit {
  private choresCollection: AngularFirestoreCollection<any>;
  chores: Observable<Chore[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.choresCollection = this.afs.collection<Chore>('chores');
    this.chores = this.choresCollection.valueChanges();
  }

  selectedChore: number;

  onSubmitNewChore(name: string) {
    this.choresCollection.add({ name });
  }

  onChoreClicked(id: number) {
    this.selectedChore = id;
  }

  onHideChoreClicked() {
    // any change
    this.selectedChore = undefined;
  }
}
