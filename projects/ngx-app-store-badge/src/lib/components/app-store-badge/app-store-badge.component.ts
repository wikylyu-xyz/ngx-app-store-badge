import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-app-store-badge',
  standalone: true,
  imports: [],
  templateUrl: './app-store-badge.component.html',
  styleUrl: './app-store-badge.component.css',
})
export class AppStoreBadgeComponent {
  @Input() url = '';
  @Input('light') light: any;

  ngOnInit(): void {
    this.light = this.light !== undefined;
  }
}
