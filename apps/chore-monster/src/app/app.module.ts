import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HeroesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
