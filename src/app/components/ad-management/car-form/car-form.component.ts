import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, NonNullableFormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Car } from 'src/app/models/car-models/car';
import { CarsService } from 'src/app/services/cars.service';
import { emptyGuid } from '../../../common/common-constants';
import { CarAd } from 'src/app/models/car-models/car-ad';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})

export class CarFormComponent {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private carsService: CarsService) {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      generation: ['', Validators.required],
      engine: ['', Validators.required],
      hp: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.carForm.valid) {
      const carData = this.carForm.value;
      const newCarAd: CarAd = {
        brandName: carData.brand,
        modelName: carData.model,
        generationName: carData.generation,
        engineName: carData.engine,
        power: carData.hp,
        isCommonBrand: false,
        id: emptyGuid
      };

      this.carsService.addCarAdAsync(newCarAd).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
