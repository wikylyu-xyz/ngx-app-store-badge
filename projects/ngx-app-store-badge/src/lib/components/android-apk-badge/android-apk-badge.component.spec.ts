import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidApkBadgeComponent } from './android-apk-badge.component';

describe('AndroidApkBadgeComponent', () => {
  let component: AndroidApkBadgeComponent;
  let fixture: ComponentFixture<AndroidApkBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidApkBadgeComponent]
    });
    fixture = TestBed.createComponent(AndroidApkBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
