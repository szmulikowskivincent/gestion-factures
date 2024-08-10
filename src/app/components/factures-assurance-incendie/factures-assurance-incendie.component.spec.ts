import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesAssuranceIncendieComponent } from './factures-assurance-incendie.component';

describe('FacturesAssuranceIncendieComponent', () => {
  let component: FacturesAssuranceIncendieComponent;
  let fixture: ComponentFixture<FacturesAssuranceIncendieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesAssuranceIncendieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesAssuranceIncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
