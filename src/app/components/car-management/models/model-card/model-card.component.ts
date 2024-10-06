import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Model } from 'src/app/models/car-models/model';

@Component({
  selector: 'app-model-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,RouterModule],
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {
  @Input() model: Model;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  
  ngOnInit() {
    //this.brandId = this.activatedRoute.snapshot.paramMap.get('brandId') ?? '';
  }
}
