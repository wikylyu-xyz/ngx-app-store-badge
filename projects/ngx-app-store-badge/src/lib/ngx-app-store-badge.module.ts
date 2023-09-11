import { NgModule } from '@angular/core';
import { GooglePlayBadgeComponent } from './components/google-play-badge/google-play-badge.component';
import { AppStoreBadgeComponent } from './components/app-store-badge/app-store-badge.component';

@NgModule({
  declarations: [GooglePlayBadgeComponent, AppStoreBadgeComponent],
  imports: [],
  exports: [GooglePlayBadgeComponent, AppStoreBadgeComponent],
})
export class NgxAppStoreBadgeModule {}
