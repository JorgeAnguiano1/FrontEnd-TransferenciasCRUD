import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadorFormComponent } from './pagador-form.component';

describe('PagadorFormComponent', () => {
  let component: PagadorFormComponent;
  let fixture: ComponentFixture<PagadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
