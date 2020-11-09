import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes.routing';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HeroesRoutingModule],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
})
export class HeroesModule {}
