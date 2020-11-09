import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

interface Chore {
  description: string;
  id: string;
}

@Component({
  selector: 'cm-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoreListComponent {
  @Input() chores: Chore[] = [];
  @Output() complete = new EventEmitter<Chore>();
  @Output() delete = new EventEmitter<string>();
  @Output() deleteAll = new EventEmitter<null>();

  onComplete(chore: Chore) {
    this.complete.emit(chore);
  }

  onDelete(chore: Chore) {
    this.delete.emit(chore.id);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }
}
