import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/car-models/brand';
import { BrandCardComponent } from '../brand-card/brand-card.component';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-library',
  standalone: true,
  imports: [CommonModule, BrandCardComponent],
  templateUrl: './brand-library.component.html',
  styleUrls: ['./brand-library.component.scss']
})
export class BrandLibraryComponent implements OnInit {
  brandsList: Brand[] = []; 

  constructor(private activatedRoute: ActivatedRoute, private brandsService: BrandsService)
  {
  
  }

  ngOnInit(): void {
    this.brandsService.getAllBrands().subscribe((result: Brand[]) => 
    { 
      this.brandsList = result;
    });  
  }
}
