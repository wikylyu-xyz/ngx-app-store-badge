import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidApkBadgeComponent } from './android-apk-badge.component';

describe('AndroidApkBadgeComponent', () => {
  let component: AndroidApkBadgeComponent;
  let fixture: ComponentFixture<AndroidApkBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidApkBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndroidApkBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
