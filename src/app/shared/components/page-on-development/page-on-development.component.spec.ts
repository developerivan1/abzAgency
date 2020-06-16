import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOnDevelopmentComponent } from './page-on-development.component';

describe('PageOnDevelopmentComponent', () => {
  let component: PageOnDevelopmentComponent;
  let fixture: ComponentFixture<PageOnDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOnDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOnDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
