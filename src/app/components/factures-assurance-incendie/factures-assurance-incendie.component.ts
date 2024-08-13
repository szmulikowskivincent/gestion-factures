import { Component } from '@angular/core';

@Component({
  selector: 'app-factures-assurance-incendie',
  standalone: true,
  imports: [],
  templateUrl: './factures-assurance-incendie.component.html',
  styleUrl: './factures-assurance-incendie.component.css',
})
export class FacturesAssuranceIncendieComponent {
  showModal = false;
modal: any;
  openLink(): void {
    window.open('https://my.yago.be/fr', '_blank');
  }
}
