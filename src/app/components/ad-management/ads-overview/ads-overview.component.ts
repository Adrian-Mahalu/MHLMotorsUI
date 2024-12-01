import { Component } from '@angular/core';
import { MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-ads-overview',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './ads-overview.component.html',
  styleUrl: './ads-overview.component.scss'
})
export class AdsOverviewComponent {

}
