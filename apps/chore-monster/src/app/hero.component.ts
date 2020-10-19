import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Chore {
  description: string;
  id: string;
}

@Component({
  selector: 'chore-monster-hero',
  template: `
    <h1>HOME</h1>

    <h2>Chores</h2>

    <section *ngIf="(chores | async)?.length > 0; else empty">
      <ol data-cy="chores">
        <li *ngFor="let chore of chores | async">
          <span data-cy="chore" (click)="onSelectChore(chore)">{{
            chore.description
          }}</span>
          <button data-cy="delete-chore" (click)="onChoreDeleted(chore.id)">
            X
          </button>
        </li>
      </ol>

      <section *ngIf="selectedChore" data-cy="chore-details">
        <h3>Chore Details</h3>
        <p>Chore: {{ selectedChore | json }}</p>
        <button (click)="onHideChoreDetail()" data-cy="hide-chore-details">
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
      <input [formControl]="description" data-cy="describe-new-chore" />
      <button
        type="submit"
        (click)="onSubmitNewChore(description.value)"
        data-cy="submit-new-chore"
      >
        Submit New Chore
      </button>
    </section>
    <button data-cy="delete-all-chores" (click)="onDeleteAllChores()">
      Delete All Chores
    </button>
  `,
  styles: [],
})
export class HeroComponent implements OnInit {
  description = new FormControl('');
  private choresCollection: AngularFirestoreCollection<any>;
  chores: Observable<Chore[]>;
  selectedChore: Chore;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.choresCollection = this.afs.collection<Chore>('chores');

    this.chores = this.choresCollection.snapshotChanges().pipe(
      map((actions): Chore[] =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Chore;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  onSubmitNewChore(description: string) {
    if (description) {
      this.choresCollection.add({ description });
      this.description.reset();
    }
  }

  onSelectChore(chore: Chore) {
    this.selectedChore = { ...chore };
  }

  onHideChoreDetail() {
    this.selectedChore = undefined;
  }

  onChoreDeleted(id: string) {
    this.choresCollection.doc(id).delete();
  }

  async onDeleteAllChores() {
    const chores = await this.choresCollection.ref.get();
    // You can use the QuerySnapshot above like in the example i linked
    chores.forEach((chore) => {
      chore.ref.delete();
    });
  }
}
