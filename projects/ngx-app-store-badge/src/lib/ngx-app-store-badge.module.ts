import { NgModule } from '@angular/core';
import { GooglePlayBadgeComponent } from './components/google-play-badge/google-play-badge.component';
import { AppStoreBadgeComponent } from './components/app-store-badge/app-store-badge.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [GooglePlayBadgeComponent, AppStoreBadgeComponent],
  imports: [BrowserModule],
  exports: [GooglePlayBadgeComponent, AppStoreBadgeComponent],
})
export class NgxAppStoreBadgeModule {}
