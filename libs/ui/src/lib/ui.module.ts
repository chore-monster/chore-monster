import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParchmentComponent } from './parchment/parchment.component';
import { AlertComponent } from './alert/alert.component';
import { ChoreListModule } from './chore-list';

@NgModule({
  imports: [CommonModule, ChoreListModule],
  declarations: [ParchmentComponent, AlertComponent],
  exports: [ParchmentComponent, AlertComponent, ChoreListModule],
})
export class UiModule {}
