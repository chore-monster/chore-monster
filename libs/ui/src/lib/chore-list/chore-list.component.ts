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

  @Output() select = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() deleteAll = new EventEmitter<null>();

  onClick(id: string) {
    this.select.emit(id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }
}
