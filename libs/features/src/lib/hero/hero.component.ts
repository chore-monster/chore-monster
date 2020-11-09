import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '@chore/ui';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Chore {
  description: string;
  id: string;
  createdAt: firebase.firestore.Timestamp;
}

@Component({
  selector: 'chore-monster-hero',
  templateUrl: `./hero.component.html`,
  styleUrls: [`./hero.component.scss`],
})
export class HeroComponent implements OnInit {
  private choresCollection: AngularFirestoreCollection<Chore>;

  chores: Observable<Chore[]>;

  selectedChore: Chore;

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
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.choresCollection = this.afs.collection<Chore>('chores', (ref) =>
      ref.orderBy('createdAt')
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
    });
    this.choreForm.reset();
    this.tasks.clear();
  }

  onSelectChore(chore: Chore) {
    this.selectedChore = { ...chore };
    this.alert.open();
  }

  onClickChoreDetails() {
    this.selectedChore = undefined;
    this.alert.close();
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
