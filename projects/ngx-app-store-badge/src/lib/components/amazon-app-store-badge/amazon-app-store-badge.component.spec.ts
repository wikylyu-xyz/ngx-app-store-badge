import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonAppStoreBadgeComponent } from './amazon-app-store-badge.component';

describe('AmazonAppStoreBadgeComponent', () => {
  let component: AmazonAppStoreBadgeComponent;
  let fixture: ComponentFixture<AmazonAppStoreBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonAppStoreBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazonAppStoreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
