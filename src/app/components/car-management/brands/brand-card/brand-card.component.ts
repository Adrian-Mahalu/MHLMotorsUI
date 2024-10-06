import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Brand } from 'src/app/models/car-models/brand';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [RouterModule, MatCardModule],
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit{
  @Input() brand: Brand;
  originalBrandLogoPath: string;
  carBrandId: string;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  onBrandCardContainerHover(isHovering: boolean): void {
    if (isHovering) {
      this.brand.logoPath = '../../../../assets/cars/logos/Default/DefaultPhotoMissingCyan.svg';
    } else {
      this.brand.logoPath = this.originalBrandLogoPath;
    }
  }
  
  ngOnInit() {
    this.originalBrandLogoPath = this.brand.logoPath;
    //this.carBrandId = this.activatedRoute.snapshot.paramMap.get('brandId') ?? '';
  }
}
