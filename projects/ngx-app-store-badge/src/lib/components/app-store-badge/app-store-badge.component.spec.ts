import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoreBadgeComponent } from './app-store-badge.component';

describe('AppStoreBadgeComponent', () => {
  let component: AppStoreBadgeComponent;
  let fixture: ComponentFixture<AppStoreBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStoreBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppStoreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
