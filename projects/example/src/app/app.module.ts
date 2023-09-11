import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAppStoreBadgeModule } from 'ngx-app-store-badge';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxAppStoreBadgeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
