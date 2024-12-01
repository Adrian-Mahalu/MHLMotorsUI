import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatGridListModule} from "@angular/material/grid-list";
import { FullAd} from "../../../models/ad-models/full-ad";
import {FullAdService} from "../../../services/full-ad.service";


@Component({
  selector: 'app-full-car-ad',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './full-car-ad.component.html',
  styleUrl: './full-car-ad.component.scss'
})
export class FullCarAdComponent implements OnInit {
  guid: string | null = null;
  ad: FullAd = new FullAd();

  constructor(private route: ActivatedRoute, private fullAdService: FullAdService) { }

  ngOnInit(): void {
    console.log("wooo");
    console.log(this.guid);
    this.route.paramMap.subscribe((params) => {
      this.guid = params.get('guid');
      if(this.guid){
        this.fullAdService.getFullAdById(this.guid).subscribe((data) => {
          this.ad = data ? data : new FullAd();
          console.log("--------------------------");
          console.log(this.ad);
        })
      }
    })
  }
}
