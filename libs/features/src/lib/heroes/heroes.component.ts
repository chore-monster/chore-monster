import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Validators, FormBuilder } from '@angular/forms';
import { AlertService } from '@chore/ui';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Hero {
  id: string;
  name: string;
  admin: boolean;
}

@Component({
  selector: 'chore-monster-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [`./heroes.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroesCollection: AngularFirestoreCollection<Hero>;

  heroes: Observable<Hero[]>;

  activeHero: Hero;

  heroForm = this.fb.group({
    name: ['', Validators.required],
    admin: false,
  });

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.heroesCollection = this.afs.collection<Hero>('Heroes');

    this.heroes = this.heroesCollection.snapshotChanges().pipe(
      map((actions): Hero[] =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Hero;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  onSubmitNewHero() {
    this.heroesCollection.add({
      ...this.heroForm.value,
    });

    this.heroForm.reset();
  }

  onSelectChore(hero: Hero) {
    this.activeHero = { ...hero };
    this.alert.open();
  }

  onClickChoreDetails() {
    this.activeHero = undefined;
    this.alert.close();
  }

  onDeleteChore(id: string) {
    this.heroesCollection.doc(id).delete();
  }

  async onDeleteAllheroes() {
    const heroes = await this.heroesCollection.ref.get();
    heroes.forEach((chore) => {
      chore.ref.delete();
    });
  }
}
