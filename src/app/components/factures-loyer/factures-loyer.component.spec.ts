import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesLoyerComponent } from './factures-loyer.component';

describe('FacturesLoyerComponent', () => {
  let component: FacturesLoyerComponent;
  let fixture: ComponentFixture<FacturesLoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesLoyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesLoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
