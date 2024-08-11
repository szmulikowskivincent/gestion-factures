import { Component } from '@angular/core';
import { ChatLuminusComponent } from "../chat-luminus/chat-luminus.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ChatLuminusComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
