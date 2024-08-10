import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

import { FacturesLoyerComponent } from './components/factures-loyer/factures-loyer.component';
import { FacturesEauComponent } from './components/factures-eau/factures-eau.component';
import { FacturesElectriciteComponent } from './components/factures-electricite/factures-electricite.component';
import { FacturesTaxesComponent } from './components/factures-taxes/factures-taxes.component';
import { FacturesCreditsComponent } from './components/factures-credits/factures-credits.component';
import { FacturesAssuranceIncendieComponent } from './components/factures-assurance-incendie/factures-assurance-incendie.component';
import { FacturesMutuellesComponent } from './components/factures-mutuelles/factures-mutuelles.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterOutlet,
    FacturesLoyerComponent,
    FacturesEauComponent,
    FacturesElectriciteComponent,
    FacturesTaxesComponent,
    FacturesCreditsComponent,
    FacturesAssuranceIncendieComponent,
    FacturesMutuellesComponent,
    AccueilComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'gestion-factures';
}
