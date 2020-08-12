import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDoPageComponent } from './we-do-page.component';

describe('WeDoPageComponent', () => {
  let component: WeDoPageComponent;
  let fixture: ComponentFixture<WeDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
