import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatGridListModule} from "@angular/material/grid-list";
import { FullAd } from "../../../models/ad-models/full-ad";
import { FullAdService } from "../../../services/full-ad.service";
import { CarImageSliderComponent } from './car-image-slider/car-image-slider.component';


@Component({
  selector: 'app-full-car-ad',
  standalone: true,
  imports: [MatGridListModule, CarImageSliderComponent],
  templateUrl: './full-car-ad.component.html',
  styleUrl: './full-car-ad.component.scss'
})
export class FullCarAdComponent implements OnInit {
  guid: string | null = null;
  ad: FullAd = new FullAd();

  constructor(private route: ActivatedRoute, private fullAdService: FullAdService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.guid = params.get('guid');
      if(this.guid){
        this.fullAdService.getFullAdById(this.guid).subscribe((data) => {
          this.ad = data ? data : new FullAd();
        })
      }
    })
  }
}
