import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AmazonAppStoreBadgeComponent,
  AndroidApkBadgeComponent,
  AppStoreBadgeComponent,
  GooglePlayBadgeComponent,
} from 'ngx-app-store-badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GooglePlayBadgeComponent,
    AppStoreBadgeComponent,
    AmazonAppStoreBadgeComponent,
    AndroidApkBadgeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'example';
}
