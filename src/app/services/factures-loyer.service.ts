import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FactureLoyer } from '../interfaces/facturesloyer';

@Injectable({
  providedIn: 'root',
})
export class FacturesLoyerService {
  private factures: FactureLoyer[] = [
    {
      id: 1,
      montant: 800,
      date: new Date(),
      description: 'Loyer pour janvier',
    },
    {
      id: 2,
      montant: 800,
      date: new Date(),
      description: 'Loyer pour février',
    },
  ];

  getFactures(): Observable<FactureLoyer[]> {
    return of(this.factures);
  }

  addFacture(facture: FactureLoyer): void {
    this.factures.push(facture);
  }

  updateFacture(updatedFacture: FactureLoyer): void {
    const index = this.factures.findIndex((f) => f.id === updatedFacture.id);
    if (index !== -1) {
      this.factures[index] = updatedFacture;
    }
  }

  deleteFacture(id: number): void {
    this.factures = this.factures.filter((f) => f.id !== id);
  }
}
