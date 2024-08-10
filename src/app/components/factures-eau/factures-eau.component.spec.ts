import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesEauComponent } from './factures-eau.component';

describe('FacturesEauComponent', () => {
  let component: FacturesEauComponent;
  let fixture: ComponentFixture<FacturesEauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesEauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
