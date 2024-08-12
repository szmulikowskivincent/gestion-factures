import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatLuminusComponent } from '../chat-luminus/chat-luminus.component';

@Component({
  selector: 'app-factures-electricite',
  standalone: true,
  imports: [CommonModule, FormsModule, ChatLuminusComponent],
  templateUrl: './factures-electricite.component.html',
  styleUrls: ['./factures-electricite.component.css'],
})
export class FacturesElectriciteComponent implements OnInit {
  month: string = '';
  kwDay: number = 0;
  kwNight: number = 0;
  dayRate: number = 0.25;
  nightRate: number = 0.15;
  dayCost: number = 0;
  nightCost: number = 0;
  totalCost: number = 0;
  showModal: boolean = false;
  results: Array<any> = [];

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  calculateConsumption(): void {
    this.dayCost = this.kwDay * this.dayRate;
    this.nightCost = this.kwNight * this.nightRate;
    this.totalCost = this.dayCost + this.nightCost;

    this.saveToLocalStorage();

    this.results.push({
      month: this.month,
      kwDay: this.kwDay,
      kwNight: this.kwNight,
      dayCost: this.dayCost,
      nightCost: this.nightCost,
      totalCost: this.totalCost,
    });

    this.showModal = true;
  }

  saveToLocalStorage(): void {
    const consumptionData = {
      month: this.month,
      kwDay: this.kwDay,
      kwNight: this.kwNight,
      dayCost: this.dayCost,
      nightCost: this.nightCost,
      totalCost: this.totalCost,
    };

    let results = localStorage.getItem('consumptionResults');
    if (results) {
      let parsedResults = JSON.parse(results);
      if (Array.isArray(parsedResults)) {
        parsedResults.push(consumptionData);
        localStorage.setItem(
          'consumptionResults',
          JSON.stringify(parsedResults)
        );
      }
    } else {
      localStorage.setItem(
        'consumptionResults',
        JSON.stringify([consumptionData])
      );
    }
  }

  loadFromLocalStorage(): void {
    const results = localStorage.getItem('consumptionResults');
    if (results) {
      this.results = JSON.parse(results);
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}
