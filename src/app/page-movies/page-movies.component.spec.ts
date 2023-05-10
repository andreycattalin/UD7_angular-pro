import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMoviesComponent } from './page-movies.component';

describe('PageMoviesComponent', () => {
  let component: PageMoviesComponent;
  let fixture: ComponentFixture<PageMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
