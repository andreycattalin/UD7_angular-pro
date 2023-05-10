import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGatosComponent } from './page-gatos.component';

describe('PageGatosComponent', () => {
  let component: PageGatosComponent;
  let fixture: ComponentFixture<PageGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
