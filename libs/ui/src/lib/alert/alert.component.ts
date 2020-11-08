import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertService } from './alert.service';
// import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'cm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  // animations: [
  //   trigger('inOutAnimation', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('1s ease-out', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       style({ opacity: 1 }),
  //       animate('1s ease-in', style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  constructor(public alert: AlertService) {}

  close() {
    this.alert.close();
  }
}
