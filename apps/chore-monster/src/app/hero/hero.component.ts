import { Component, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Chore {
  description: string;
  id: string;
}

@Component({
  selector: 'chore-monster-hero',
  templateUrl: `./hero.component.html`,
  styleUrls: [`./hero.component.scss`],
})
export class HeroComponent implements OnInit {
  private choresCollection: AngularFirestoreCollection<any>;

  chores: Observable<Chore[]>;
  selectedChore: Chore;
  description = new FormControl('');
  choreForm = this.fb.group({
    description: ['', Validators.required],
    difficulty: 0,
    tasks: this.fb.array([]),
  });
  get tasks() {
    return this.choreForm.get('tasks') as FormArray;
  }

  constructor(private afs: AngularFirestore, private fb: FormBuilder) {}

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

  onAddTask() {
    this.tasks.push(this.fb.control(''));
  }

  onSubmitNewChore() {
    const filteredTasks = this.tasks.value.filter((task) => task !== '');
    this.choresCollection.add({
      ...this.choreForm.value,
      tasks: filteredTasks,
    });
    this.choreForm.reset();
    this.tasks.clear();
  }

  onShowChoreDetails(chore: Chore) {
    this.selectedChore = { ...chore };
  }

  onHideChoreDetails() {
    this.selectedChore = undefined;
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
