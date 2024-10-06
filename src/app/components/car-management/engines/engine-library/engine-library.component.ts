import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Engine } from 'src/app/models/car-models/engine';
import { EnginesService } from 'src/app/services/engines.service';
import { EngineCardComponent } from '../engine-card/engine-card.component';

@Component({
  selector: 'app-engine-library',
  standalone: true,
  imports: [EngineCardComponent, CommonModule],
  templateUrl: './engine-library.component.html',
  styleUrls: ['./engine-library.component.scss']
})
export class EngineLibraryComponent implements OnInit {
  generationName: string;
  enginesList: Engine[] = [];

  constructor(private activatedRoute: ActivatedRoute, private engineService: EnginesService) {

  }
  
  ngOnInit(): void {
    this.generationName = this.activatedRoute.snapshot.paramMap.get('generationName') ?? '';
    this.engineService.getEnginesByGenerationName(this.generationName).subscribe((result: Engine[]) => 
    { this.enginesList = result;
    });
  }

}
