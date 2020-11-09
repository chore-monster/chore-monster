import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChoreListComponent } from './chore-list.component';
import { ChoreItemComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [ChoreListComponent, ChoreItemComponent],
  exports: [ChoreListComponent],
})
export class ChoreListModule {}
