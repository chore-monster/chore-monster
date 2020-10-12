import { CommonModule } from '@angular/common';
import { isDevMode, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeroComponent } from './hero.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  providers: [    
    {
      provide: FIRESTORE_SETTINGS,
      useFactory: () => environment.production ?
      undefined : 
      { host: 'localhost:4999', ssl: false, experimentalForceLongPolling: true }
    },
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
