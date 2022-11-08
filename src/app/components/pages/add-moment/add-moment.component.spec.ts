import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMomentComponent } from './add-moment.component';

describe('AddMomentComponent', () => {
  let component: AddMomentComponent;
  let fixture: ComponentFixture<AddMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
