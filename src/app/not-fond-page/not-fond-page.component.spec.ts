import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondPageComponent } from './not-fond-page.component';

describe('NotFondPageComponent', () => {
  let component: NotFondPageComponent;
  let fixture: ComponentFixture<NotFondPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFondPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
