import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFrComponent } from './grid-fr.component';

describe('GridFrComponent', () => {
  let component: GridFrComponent;
  let fixture: ComponentFixture<GridFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
