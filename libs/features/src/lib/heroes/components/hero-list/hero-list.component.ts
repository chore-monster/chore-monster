import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export interface Hero {
  id: string;
  name: string;
  admin: boolean;
}

@Component({
  selector: 'cm-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() deleteAll = new EventEmitter<null>();

  onClick() {
    this.deleteAll.emit();
  }
}
