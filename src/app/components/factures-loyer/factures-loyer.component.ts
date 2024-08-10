import { Component, OnInit } from '@angular/core';
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
export class FacturesLoyerComponent implements OnInit {
  factures: FactureLoyer[] = [];
  newFacture: FactureLoyer = {
    id: 0,
    montant: 0,
    date: new Date(),
    description: '',
    dateLimite: new Date(),
    encodageDate: new Date() 
  };
  allFacturesUpToDate: boolean = true;
alertMessage: any;
isOrderUpToDate: any;

  constructor(private facturesService: FacturesLoyerService) {}

  ngOnInit(): void {
    this.loadFactures();
  }

  loadFactures(): void {
    this.facturesService
      .getFactures()
      .subscribe((factures) => {
        this.factures = factures;
        this.checkFacturesStatus();
      });
  }

  addFacture(): void {
    const id =
      this.factures.length > 0
        ? Math.max(...this.factures.map((f) => f.id)) + 1
        : 1;
    this.newFacture.id = id;
    this.newFacture.encodageDate = new Date(); 
    this.facturesService.addFacture(this.newFacture);
    this.newFacture = { id: 0, montant: 0, date: new Date(), description: '', dateLimite: new Date(), encodageDate: new Date() };
    this.loadFactures();
  }

  deleteFacture(id: number): void {
    this.facturesService.deleteFacture(id);
    this.loadFactures();
  }

  checkFacturesStatus(): void {
    const today = new Date();
    const overdueFactures = this.factures.filter(facture => facture.dateLimite && new Date(facture.dateLimite) < today);
    
    this.allFacturesUpToDate = overdueFactures.length === 0;

    if (this.allFacturesUpToDate) {
      alert('Toutes vos factures de loyer sont à jour!');
    } else {
      alert('Attention : Certaines factures sont en retard de paiement.');
    }
  }
}

