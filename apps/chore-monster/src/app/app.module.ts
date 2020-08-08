import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero.component';
import { RoutingModule } from 'angular-routing';

@NgModule({
  imports: [BrowserModule, RoutingModule.forRoot()],
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
