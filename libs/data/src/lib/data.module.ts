import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromChores from './chores/chores.reducer';
import { ChoresEffects } from './chores/chores.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromChores.CHORES_FEATURE_KEY, fromChores.reducer),
    EffectsModule.forFeature([ChoresEffects]),
  ],
})
export class DataModule {}
