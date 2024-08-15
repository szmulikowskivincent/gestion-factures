import { Component } from '@angular/core';

@Component({
  selector: 'app-factures-taxes',
  standalone: true,
  imports: [],
  templateUrl: './factures-taxes.component.html',
  styleUrl: './factures-taxes.component.css',
})
export class FacturesTaxesComponent {
  redirectToPage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const url = selectElement.value;
    if (url) {
      window.location.href = url;
    }
  }
}
