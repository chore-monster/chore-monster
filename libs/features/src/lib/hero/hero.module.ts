import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero.routing';
import { UiModule } from '@chore/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HeroRoutingModule, UiModule],
  declarations: [HeroComponent],
  exports: [HeroComponent],
})
export class HeroModule {}
