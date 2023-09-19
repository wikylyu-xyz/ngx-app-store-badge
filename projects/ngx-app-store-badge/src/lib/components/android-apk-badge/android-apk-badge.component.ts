import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-android-apk-badge',
  templateUrl: './android-apk-badge.component.html',
  styleUrls: ['./android-apk-badge.component.scss'],
})
export class AndroidApkBadgeComponent {
  @Input() url = '';
}
