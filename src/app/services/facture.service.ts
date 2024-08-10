import { Injectable } from '@angular/core';
import { Facture } from '../interfaces/factures';


@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private factures: Facture[] = [];

  constructor() {}

  ajouterFacture(facture: Facture) {
    this.factures.push(facture);
  }

  obtenirFactures(): Facture[] {
    return this.factures;
  }

  supprimerFacture(id: number) {
    this.factures = this.factures.filter(facture => facture.id !== id);
  }
}

