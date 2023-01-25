import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoststudentComponent } from './poststudent.component';

describe('PoststudentComponent', () => {
  let component: PoststudentComponent;
  let fixture: ComponentFixture<PoststudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoststudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoststudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
