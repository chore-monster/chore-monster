import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell.routing';

@NgModule({
  imports: [ShellRoutingModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
