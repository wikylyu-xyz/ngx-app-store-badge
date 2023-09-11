import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-app-store-badge',
  templateUrl: './app-store-badge.component.html',
  styleUrls: ['./app-store-badge.component.scss'],
})
export class AppStoreBadgeComponent {
  @Input() url = '';
}
