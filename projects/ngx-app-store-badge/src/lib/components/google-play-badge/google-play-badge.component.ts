import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-google-play-badge',
  standalone: true,
  imports: [],
  templateUrl: './google-play-badge.component.html',
  styleUrl: './google-play-badge.component.css',
})
export class GooglePlayBadgeComponent {
  @Input() url = '';
}
