import { Component } from '@angular/core';

@Component({
  selector: 'chore-monster-root',
  template: `
    <router>
      <!-- For nested routes use exact: false -->
      <route path="/heroes">
        <chore-monster-heroes *routeComponent></chore-monster-heroes>
      </route>
      <route path="/heroes/:hero">
        <chore-monster-hero *routeComponent></chore-monster-hero>
      </route>
      <route path="/" redirectTo="/heroes"> </route>
      <!-- <route path="/" [exact]="false">
        <app-page-not-found *routeComponent></app-page-not-found>
      </route> -->
    </router>
  `,
  styles: [],
})
export class AppComponent {}
