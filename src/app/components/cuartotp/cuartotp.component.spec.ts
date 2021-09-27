import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartotpComponent } from './cuartotp.component';

describe('CuartotpComponent', () => {
  let component: CuartotpComponent;
  let fixture: ComponentFixture<CuartotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
