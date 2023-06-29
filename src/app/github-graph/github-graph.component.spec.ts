import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubGraphComponent } from './github-graph.component';

describe('GithubGraphComponent', () => {
  let component: GithubGraphComponent;
  let fixture: ComponentFixture<GithubGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
