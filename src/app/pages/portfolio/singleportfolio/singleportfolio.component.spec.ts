import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleportfolioComponent } from './singleportfolio.component';

describe('SingleportfolioComponent', () => {
  let component: SingleportfolioComponent;
  let fixture: ComponentFixture<SingleportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
