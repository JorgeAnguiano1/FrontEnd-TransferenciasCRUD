import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadorListComponent } from './pagador-list.component';

describe('PagadorListComponent', () => {
  let component: PagadorListComponent;
  let fixture: ComponentFixture<PagadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
