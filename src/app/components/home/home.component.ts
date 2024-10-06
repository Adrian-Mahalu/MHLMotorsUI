import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatMenuModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }
}
