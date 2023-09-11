import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-store-badge',
  templateUrl: './app-store-badge.component.html',
  styleUrls: ['./app-store-badge.component.scss'],
})
export class AppStoreBadgeComponent implements OnInit {
  @Input() url = '';
  @Input('light') light: any;

  ngOnInit(): void {
    this.light = this.light !== undefined;
  }
}
