import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FullAd } from 'src/app/models/ad-models/full-ad';
import { FullAdService } from "../../../services/full-ad.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})

export class CarFormComponent implements OnInit {
  adForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private fullAdService: FullAdService) {
  }

  ngOnInit(): void {
    this.adForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      kilometers: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      horsepower: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      fuel: ['', Validators.required],
      gearbox: ['', Validators.required],
      dateOfFabrication: ['', Validators.required],
      sellerName: ['', Validators.required],
      adDescription: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imageSource: ['']
    });
  }

  onSubmit() {
    if(this.adForm.valid) {
      const carData = this.adForm.value;
      const fullAd: FullAd = {
        title: carData.title,
        phoneNumber: carData.phoneNumber,
        kilometers: carData.kilometers,
        horsepower: carData.horsepower,
        fuel: carData.fuel,
        gearbox: carData.gearbox,
        dateOfFabrication: carData.dateOfFabrication,
        sellerName: carData.sellerName,
        adDescription: carData.adDescription,
        price: carData.price,
        imageSource: '',
        id: crypto.randomUUID()
      };

      this.fullAdService.postAd(fullAd).subscribe((response) => {

      });
    }
  }
}
