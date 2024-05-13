import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlayBadgeComponent } from './google-play-badge.component';

describe('GooglePlayBadgeComponent', () => {
  let component: GooglePlayBadgeComponent;
  let fixture: ComponentFixture<GooglePlayBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglePlayBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GooglePlayBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
