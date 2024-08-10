import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactureLoyer } from '../../interfaces/facturesloyer';
import { FacturesLoyerService } from '../../services/factures-loyer.service';

@Component({
  selector: 'app-factures-loyer',
  standalone: true,
  templateUrl: './factures-loyer.component.html',
  styleUrls: ['./factures-loyer.component.css'],
  imports: [CommonModule, FormsModule],
})
export class FacturesLoyerComponent {
  factures: FactureLoyer[] = [];
  newFacture: FactureLoyer = {
    id: 0,
    montant: 0,
    date: new Date(),
    description: '',
  };

  constructor(private facturesService: FacturesLoyerService) {}

  ngOnInit(): void {
    this.loadFactures();
  }

  loadFactures(): void {
    this.facturesService
      .getFactures()
      .subscribe((factures) => (this.factures = factures));
  }

  addFacture(): void {
    const id =
      this.factures.length > 0
        ? Math.max(...this.factures.map((f) => f.id)) + 1
        : 1;
    this.newFacture.id = id;
    this.facturesService.addFacture(this.newFacture);
    this.newFacture = { id: 0, montant: 0, date: new Date(), description: '' };
    this.loadFactures();
  }

  deleteFacture(id: number): void {
    this.facturesService.deleteFacture(id);
    this.loadFactures();
  }
}
