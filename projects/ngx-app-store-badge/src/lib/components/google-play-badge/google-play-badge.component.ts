import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-google-play-badge',
  templateUrl: './google-play-badge.component.html',
  styleUrls: ['./google-play-badge.component.scss'],
})
export class GooglePlayBadgeComponent {
  @Input() url = '';
}
