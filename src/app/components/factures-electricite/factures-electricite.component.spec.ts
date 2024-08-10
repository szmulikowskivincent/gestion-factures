import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesElectriciteComponent } from './factures-electricite.component';

describe('FacturesElectriciteComponent', () => {
  let component: FacturesElectriciteComponent;
  let fixture: ComponentFixture<FacturesElectriciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesElectriciteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesElectriciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
