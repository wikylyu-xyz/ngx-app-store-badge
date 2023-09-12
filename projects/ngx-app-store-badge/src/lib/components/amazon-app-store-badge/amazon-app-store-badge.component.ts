import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-amazon-app-store-badge',
  templateUrl: './amazon-app-store-badge.component.html',
  styleUrls: ['./amazon-app-store-badge.component.scss'],
})
export class AmazonAppStoreBadgeComponent {
  @Input() url = '';
  @Input('light') light: any;

  ngOnInit(): void {
    this.light = this.light !== undefined;
  }
}
