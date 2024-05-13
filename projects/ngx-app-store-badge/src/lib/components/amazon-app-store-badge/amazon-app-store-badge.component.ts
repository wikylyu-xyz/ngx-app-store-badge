import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-amazon-app-store-badge',
  standalone: true,
  imports: [],
  templateUrl: './amazon-app-store-badge.component.html',
  styleUrl: './amazon-app-store-badge.component.css',
})
export class AmazonAppStoreBadgeComponent {
  @Input() url = '';
  @Input('light') light: any;

  ngOnInit(): void {
    this.light = this.light !== undefined;
  }
}
