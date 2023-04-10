import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheportfolioComponent } from './afficheportfolio.component';

describe('AfficheportfolioComponent', () => {
  let component: AfficheportfolioComponent;
  let fixture: ComponentFixture<AfficheportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
