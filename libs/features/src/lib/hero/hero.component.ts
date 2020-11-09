import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Chore {
  id: string;
  description: string;
  createdAt: firebase.firestore.FieldValue;
  lastCompletedAt: firebase.firestore.FieldValue;
  invoices: string[];
}

interface Invoice {
  userId: string;
  choreId: string;
  completedAt: firebase.firestore.FieldValue;
  pending: boolean;
}

@Component({
  selector: 'chore-monster-hero',
  templateUrl: `./hero.component.html`,
  styleUrls: [`./hero.component.scss`],
})
export class HeroComponent implements OnInit {
  private choresCollection: AngularFirestoreCollection<Chore>;
  private invoicesCollection: AngularFirestoreCollection<Invoice>;

  chores: Observable<Chore[]>;

  choreForm = this.fb.group({
    description: ['', Validators.required],
    difficulty: 0,
    tasks: this.fb.array([]),
  });

  get tasks() {
    return this.choreForm.get('tasks') as FormArray;
  }

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.choresCollection = this.afs.collection<Chore>('chores', (ref) =>
      ref.orderBy('lastCompletedAt')
    );

    this.chores = this.choresCollection.snapshotChanges().pipe(
      map((actions): Chore[] =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Chore;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    this.invoicesCollection = this.afs.collection<Invoice>('invoices');
  }

  onAddTask() {
    this.tasks.push(this.fb.control(''));
  }

  onSubmitNewChore() {
    const filteredTasks = this.tasks.value.filter((task) => task !== '');
    this.choresCollection.add({
      ...this.choreForm.value,
      tasks: filteredTasks,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastCompletedAt: firebase.firestore.FieldValue.serverTimestamp(),
      invoices: [],
    });
    this.choreForm.reset();
    this.tasks.clear();
  }

  onCompleteChore(chore: Chore) {
    const batch = this.afs.firestore.batch();

    const invoiceId = this.afs.createId();
    const invoiceRef = this.invoicesCollection.doc(invoiceId).ref;
    batch.set(invoiceRef, {
      userId: this.route.snapshot.params.id,
      choreId: chore.id,
      completedAt: firebase.firestore.FieldValue.serverTimestamp(),
      pending: true,
    });

    const choreRef = this.choresCollection.doc(chore.id).ref;
    batch.update(choreRef, {
      invoices: [invoiceId, ...chore.invoices],
      lastCompletedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    return batch.commit();
  }

  onDeleteChore(id: string) {
    this.choresCollection.doc(id).delete();
  }

  async onDeleteAllChores() {
    const chores = await this.choresCollection.ref.get();
    chores.forEach((chore) => {
      chore.ref.delete();
    });
  }
}
