import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetteacherComponent } from './getteacher.component';

describe('GetteacherComponent', () => {
  let component: GetteacherComponent;
  let fixture: ComponentFixture<GetteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
