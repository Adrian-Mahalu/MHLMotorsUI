import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarIcons } from './navbar-icons';

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
  navbarIcons = NavbarIcons;
  appLogoSrc: string = this.navbarIcons.appLogoSrcs.defaultSrc;
  hamburgerMenuOpenLogoSrc: string = this.navbarIcons.hamburgerMenuOpenIconSrcs.defaultSrc;
  hamburgerMenuCloseLogoSrc: string = this.navbarIcons.hamburgerMenuClosedIconSrcs.defaultSrc;

  toggleHamburgerMenu() {
    this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
    this.shouldDisplayHamburgerMenuIcon();
  } 
  shouldDisplayHamburgerMenuIcon() {
    this.showHamburgerMenuIcon = !this.isHamburgerMenuActive;
  }
  
  onBrandLogoHover(){
    this.appLogoSrc = this.navbarIcons.appLogoSrcs.hoveredSrc;
  }

  onBrandLogoLeave() {
    this.appLogoSrc = this.navbarIcons.appLogoSrcs.defaultSrc;
  }

  onBrandLogoClick(){
    this.appLogoSrc = this.navbarIcons.appLogoSrcs.activeSrc;
  }
}



