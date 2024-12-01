import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getModelsFirstCharacterDictionary } from 'src/app/logic-handlers/model-library-logic-handler';
import { Model } from 'src/app/models/car-models/model';
import { ModelsService } from 'src/app/services/models.service';
import { ModelCardComponent } from '../model-card/model-card.component';

@Component({
  selector: 'app-model-library',
  standalone: true,
  imports: [CommonModule, ModelCardComponent],
  templateUrl: './model-library.component.html',
  styleUrls: ['./model-library.component.scss']
})
export class ModelLibraryComponent implements OnInit {
  brandNameFromURL: string;
  modelsList: Model[];
  modelsFirstCharacterDictionary = new Map<string, Model[]>();
  
  constructor(private activatedRoute: ActivatedRoute, private modelService: ModelsService)
  {
  
  }

  ngOnInit(): void {
    this.brandNameFromURL = this.activatedRoute.snapshot.paramMap.get('brandName') ?? '';
    this.modelService.getModelsByBrandName(this.brandNameFromURL).subscribe((result: Model[]) => 
    { this.modelsList = result; 
      this.modelsFirstCharacterDictionary = getModelsFirstCharacterDictionary(this.modelsList);
    });
    
  }
}
