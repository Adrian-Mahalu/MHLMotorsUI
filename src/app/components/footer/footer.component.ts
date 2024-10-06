import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  fontSize: number = 20; // Initial font size

  @HostListener('window:resize', ['$event']) onResize(event: Event){
    this.updateFontSize();
  }

  updateFontSize(){
    const zoomFactor = (window.innerWidth / window.outerWidth) * 100;
    const newFontSize = 20 / (zoomFactor / 100);

    this.fontSize = newFontSize;
  }
}
