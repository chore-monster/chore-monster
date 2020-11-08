import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from '@chore/features';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ShellModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
