import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes.routing';

@NgModule({
  imports: [CommonModule, HeroesRoutingModule],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
})
export class HeroesModule {}
