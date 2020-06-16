import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerfulUsersComponent } from './cheerful-users.component';

describe('CheerfulUsersComponent', () => {
  let component: CheerfulUsersComponent;
  let fixture: ComponentFixture<CheerfulUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerfulUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerfulUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
