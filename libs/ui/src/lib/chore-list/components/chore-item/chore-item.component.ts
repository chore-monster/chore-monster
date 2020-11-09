import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as firebase from 'firebase';

interface Chore {
  id: string;
  description: string;
  createdAt: firebase.firestore.FieldValue;
  lastCompletedAt: firebase.firestore.FieldValue;
  invoices: string[];
}

@Component({
  selector: 'cm-chore-item',
  templateUrl: './chore-item.component.html',
  styleUrls: ['./chore-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoreItemComponent {
  @Input() chore: Chore;
  @Output() complete = new EventEmitter<Chore>();
  @Output() delete = new EventEmitter<Chore>();

  showDetails = false;

  onClick() {
    this.showDetails = !this.showDetails;
  }

  onComplete() {
    this.showDetails = false;
    this.complete.emit(this.chore);
  }

  onDelete() {
    this.delete.emit(this.chore);
  }
}
