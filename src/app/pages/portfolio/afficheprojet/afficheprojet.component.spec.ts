import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheprojetComponent } from './afficheprojet.component';

describe('AfficheprojetComponent', () => {
  let component: AfficheprojetComponent;
  let fixture: ComponentFixture<AfficheprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
