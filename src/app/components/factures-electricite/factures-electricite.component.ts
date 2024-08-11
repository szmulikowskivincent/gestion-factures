import { Component } from '@angular/core';
import { ChatLuminusComponent } from '../chat-luminus/chat-luminus.component';

@Component({
  selector: 'app-factures-electricite',
  standalone: true,
  imports: [ChatLuminusComponent],
  templateUrl: './factures-electricite.component.html',
  styleUrl: './factures-electricite.component.css',
})
export class FacturesElectriciteComponent {}
