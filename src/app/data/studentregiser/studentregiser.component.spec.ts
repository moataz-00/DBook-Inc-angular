import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregiserComponent } from './studentregiser.component';

describe('StudentregiserComponent', () => {
  let component: StudentregiserComponent;
  let fixture: ComponentFixture<StudentregiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentregiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentregiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
