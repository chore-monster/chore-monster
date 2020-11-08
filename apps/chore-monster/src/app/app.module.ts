import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useFactory: () =>
        environment.production
          ? undefined
          : {
              host: 'localhost:4999',
              ssl: false,
              experimentalForceLongPolling: true,
            },
    },
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
