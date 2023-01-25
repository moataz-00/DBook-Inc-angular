import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherregiserComponent } from './teacherregiser.component';

describe('TeacherregiserComponent', () => {
  let component: TeacherregiserComponent;
  let fixture: ComponentFixture<TeacherregiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherregiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherregiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
