import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsPageComponent } from './blogs-page.component';

describe('TestimonialsPageComponent', () => {
  let component: BlogsPageComponent;
  let fixture: ComponentFixture<BlogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
