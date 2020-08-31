import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
