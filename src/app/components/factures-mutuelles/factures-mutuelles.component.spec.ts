import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesMutuellesComponent } from './factures-mutuelles.component';

describe('FacturesMutuellesComponent', () => {
  let component: FacturesMutuellesComponent;
  let fixture: ComponentFixture<FacturesMutuellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesMutuellesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesMutuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
