import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParchmentComponent } from './parchment/parchment.component';
import { ChoreListComponent } from './chore-list/chore-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParchmentComponent, ChoreListComponent],
  exports: [ParchmentComponent, ChoreListComponent],
})
export class UiModule {}
