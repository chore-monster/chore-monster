import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  //   {
  //     path: 'home',
  //     loadChildren: () =>
  //       import('@chore/home').then((m) => m.ManagedFeatureModule),
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
