import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Generation } from 'src/app/models/car-models/generation';
import { GenerationsService } from 'src/app/services/generations.service';
import { GenerationCardComponent } from '../generation-card/generation-card.component';

@Component({
  selector: 'app-generation-library',
  standalone: true,
  imports: [CommonModule, GenerationCardComponent],
  templateUrl: './generation-library.component.html',
  styleUrls: ['./generation-library.component.scss']
})
export class GenerationLibraryComponent implements OnInit{
  generationsList: Generation[] = [];
  modelName: string;

constructor(private activatedRoute: ActivatedRoute,private generationService: GenerationsService) {

}

  ngOnInit(): void {
    this.modelName = this.activatedRoute.snapshot.paramMap.get('modelName') ?? '';
    this.generationService.getGenerationsByModelName(this.modelName).subscribe((result: Generation[]) => 
    { this.generationsList = result;
      console.log(this.generationsList);
    });
  }
}
