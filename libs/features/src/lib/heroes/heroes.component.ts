import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chore-monster-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [`./heroes.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes = ['kyle', 'amanda', 'bee', 'kit'];
  constructor() {}

  ngOnInit(): void {}
}
