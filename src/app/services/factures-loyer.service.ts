import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FactureLoyer } from '../interfaces/facturesloyer';

@Injectable({
  providedIn: 'root',
})
export class FacturesLoyerService {
  private localStorageKey = 'facturesLoyer';
  private conversionRateToEuro = 1.0;

  getFactures(): Observable<FactureLoyer[]> {
    const storedFactures = localStorage.getItem(this.localStorageKey);
    const factures: FactureLoyer[] = storedFactures
      ? JSON.parse(storedFactures)
      : [];
    return of(factures);
  }

  addFacture(facture: FactureLoyer): void {
    const factures = this.getFacturesFromLocalStorage();

    facture.montant = this.convertToEuro(facture.montant);

    factures.push(facture);
    this.saveFacturesToLocalStorage(factures);
  }

  deleteFacture(id: number): void {
    let factures = this.getFacturesFromLocalStorage();
    factures = factures.filter((facture) => facture.id !== id);
    this.saveFacturesToLocalStorage(factures);
  }

  private convertToEuro(montant: number): number {
    return montant * this.conversionRateToEuro;
  }

  private getFacturesFromLocalStorage(): FactureLoyer[] {
    const storedFactures = localStorage.getItem(this.localStorageKey);
    return storedFactures ? JSON.parse(storedFactures) : [];
  }

  private saveFacturesToLocalStorage(factures: FactureLoyer[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(factures));
  }
}
