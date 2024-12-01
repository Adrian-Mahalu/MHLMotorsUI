import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-ad-snippet',
  standalone: true,
  templateUrl: './ad-snippet.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./ad-snippet.component.scss']
})
export class AdSnippetComponent {
 @Input() guid: string;
}
