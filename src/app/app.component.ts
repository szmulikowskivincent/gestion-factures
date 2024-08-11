import { Component, OnInit } from '@angular/core';
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
import { ChatLuminusComponent } from './components/chat-luminus/chat-luminus.component';
import { title } from 'process';

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
    FooterComponent,
    ChatLuminusComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showModal: boolean = true;
  private _username: string = 'Vincent1307';
  private _password: string = '06f394c88fe82bd9bb0369ec701cd2a3';

  username: string = '';
  password: string = '';

  ngOnInit(): void {
    this.openModalOnPageLoad();
  }

  openModalOnPageLoad(): void {
    this.showModal = true;
  }

  onSubmit(): void {
    if (this.username === this._username && this.password === this._password) {
      this.showModal = false;
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
  }
  title = 'gestion-factures';
}
