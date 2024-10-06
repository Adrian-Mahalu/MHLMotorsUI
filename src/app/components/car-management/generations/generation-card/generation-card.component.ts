import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Generation } from 'src/app/models/car-models/generation';
import { Fuel, Electricity, Hybrid, Hydrogen } from 'src/app/common/fuel-type-constants';

@Component({
  selector: 'app-generation-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './generation-card.component.html',
  styleUrls: ['./generation-card.component.scss']
})
export class GenerationCardComponent implements OnInit {
  @Input() generation: Generation;
  Fuel: string = Fuel;
  Electricity: string = Electricity;
  Hybrid: string = Hybrid;
  Hydrogen: string = Hydrogen;

  constructor(private activatedRoute: ActivatedRoute)
  {
  
  }

  ngOnInit(): void {
    console.log(this.generation);
  }

  getVerticalBarColorClassByEndOfProduction(endOfProduction: number){
    return (endOfProduction != null) ? 'red-background' : 'green-background';
  }
  
  getProductionTextColorClassByEndOfProduction(endOfProduction: number) {
  return (endOfProduction != null) ? 'red-text' : 'green-text';
  }
}


