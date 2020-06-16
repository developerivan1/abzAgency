import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquaintedComponent } from './acquainted.component';

describe('AcquaintedComponent', () => {
  let component: AcquaintedComponent;
  let fixture: ComponentFixture<AcquaintedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquaintedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaintedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
