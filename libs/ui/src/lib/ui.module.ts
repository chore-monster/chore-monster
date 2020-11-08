import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParchmentComponent } from './parchment/parchment.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParchmentComponent, ChoreListComponent, AlertComponent],
  exports: [ParchmentComponent, ChoreListComponent, AlertComponent],
})
export class UiModule {}
