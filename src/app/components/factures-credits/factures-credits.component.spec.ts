import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesCreditsComponent } from './factures-credits.component';

describe('FacturesCreditsComponent', () => {
  let component: FacturesCreditsComponent;
  let fixture: ComponentFixture<FacturesCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesCreditsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
