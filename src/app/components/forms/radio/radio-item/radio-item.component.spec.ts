import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioItemComponent } from './radio-item.component';

describe('RadioItemComponent', () => {
  let component: RadioItemComponent;
  let fixture: ComponentFixture<RadioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
