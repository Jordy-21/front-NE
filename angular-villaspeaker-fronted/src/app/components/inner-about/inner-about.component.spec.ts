import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerAboutComponent } from './inner-about.component';

describe('InnerAboutComponent', () => {
  let component: InnerAboutComponent;
  let fixture: ComponentFixture<InnerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
