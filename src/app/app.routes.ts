import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FacturesAssuranceIncendieComponent } from './components/factures-assurance-incendie/factures-assurance-incendie.component';
import { FacturesCreditsComponent } from './components/factures-credits/factures-credits.component';
import { FacturesEauComponent } from './components/factures-eau/factures-eau.component';
import { FacturesElectriciteComponent } from './components/factures-electricite/factures-electricite.component';
import { FacturesLoyerComponent } from './components/factures-loyer/factures-loyer.component';
import { FacturesMutuellesComponent } from './components/factures-mutuelles/factures-mutuelles.component';
import { FacturesTaxesComponent } from './components/factures-taxes/factures-taxes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
  { path: 'accueil', component: AccueilComponent },
  { path: 'factures-loyer', component: FacturesLoyerComponent },
  { path: 'factures-eau', component: FacturesEauComponent },
  { path: 'factures-electricite', component: FacturesElectriciteComponent },
  { path: 'factures-mutuelles', component: FacturesMutuellesComponent },
  { path: 'factures-taxes', component: FacturesTaxesComponent },
  { path: 'factures-assurance-incendie', component: FacturesAssuranceIncendieComponent },
  { path: 'factures-credits', component: FacturesCreditsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

