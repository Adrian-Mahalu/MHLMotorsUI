import { Component, ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-detailing-service',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatCardModule, MatRadioModule, MatDatepickerModule],
  templateUrl: './detailing-service.component.html',
  styleUrl: './detailing-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailingServiceComponent {
  selected: Date | null;
}
