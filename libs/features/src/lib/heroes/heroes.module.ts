import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes.routing';
import { HeroListComponent } from './components';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HeroesRoutingModule],
  declarations: [HeroesComponent, HeroListComponent],
  exports: [HeroesComponent],
})
export class HeroesModule {}
