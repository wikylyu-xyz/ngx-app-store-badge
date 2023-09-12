import { NgModule } from '@angular/core';
import { GooglePlayBadgeComponent } from './components/google-play-badge/google-play-badge.component';
import { AppStoreBadgeComponent } from './components/app-store-badge/app-store-badge.component';
import { BrowserModule } from '@angular/platform-browser';
import { AmazonAppStoreBadgeComponent } from './components/amazon-app-store-badge/amazon-app-store-badge.component';

@NgModule({
  declarations: [
    GooglePlayBadgeComponent,
    AppStoreBadgeComponent,
    AmazonAppStoreBadgeComponent,
  ],
  imports: [BrowserModule],
  exports: [
    GooglePlayBadgeComponent,
    AppStoreBadgeComponent,
    AmazonAppStoreBadgeComponent,
  ],
})
export class NgxAppStoreBadgeModule {}
