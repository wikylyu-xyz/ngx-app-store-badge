import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-android-apk-badge',
  standalone: true,
  imports: [],
  templateUrl: './android-apk-badge.component.html',
  styleUrl: './android-apk-badge.component.css',
})
export class AndroidApkBadgeComponent {
  @Input() url = '';
}
