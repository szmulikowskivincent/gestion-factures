import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesTaxesComponent } from './factures-taxes.component';

describe('FacturesTaxesComponent', () => {
  let component: FacturesTaxesComponent;
  let fixture: ComponentFixture<FacturesTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesTaxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
