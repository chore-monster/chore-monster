import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
