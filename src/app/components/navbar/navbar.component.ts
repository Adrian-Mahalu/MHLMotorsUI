import { Component } from '@angular/core';
import { appLogoSrcs, hamburgerMenuOpenLogoSrcs, hamburgerMenuCloseLogoSrcs } from './navbar-constants';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isHamburgerMenuActive: boolean = false;
  showHamburgerMenuIcon: boolean = true;

  appLogoSrc: string = appLogoSrcs.defaultSrc;
  hamburgerMenuOpenLogoSrc: string = hamburgerMenuOpenLogoSrcs.defaultSrc;
  hamburgerMenuCloseLogoSrc: string = hamburgerMenuCloseLogoSrcs.defaultSrc;

  toggleHamburgerMenu() {
    this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
    this.shouldDisplayHamburgerMenuIcon();
  } 
  shouldDisplayHamburgerMenuIcon() {
    this.showHamburgerMenuIcon = !this.isHamburgerMenuActive;
  } 
}



