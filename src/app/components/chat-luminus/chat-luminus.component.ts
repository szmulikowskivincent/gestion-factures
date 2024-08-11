import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-luminus',
  templateUrl: './chat-luminus.component.html',
  styleUrls: ['./chat-luminus.component.css'],
  standalone: true,  
  imports: [CommonModule]  
})
export class ChatLuminusComponent {
  pseudo: string = 'szmulikowski Vincent';

  startLuminusChat(): void {
    const chatUrl = `https://secure.luminus.be/fr/zoneclient/chat/?pseudo=${encodeURIComponent(
      this.pseudo
    )}`;
    window.open(chatUrl, '_blank', 'width=400,height=600');
  }
}
