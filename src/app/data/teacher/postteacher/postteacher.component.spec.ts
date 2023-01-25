import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostteacherComponent } from './postteacher.component';

describe('PostteacherComponent', () => {
  let component: PostteacherComponent;
  let fixture: ComponentFixture<PostteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
