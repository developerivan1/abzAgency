import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerfulUserComponent } from './cheerful-user.component';

describe('CheerfulUserComponent', () => {
  let component: CheerfulUserComponent;
  let fixture: ComponentFixture<CheerfulUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerfulUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerfulUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
