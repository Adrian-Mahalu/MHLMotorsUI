import { Component } from '@angular/core';
import { AdFiltersComponent } from "../ad-filters/ad-filters.component";
import { AdSnippetComponent } from "../ad-snippet/ad-snippet.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ad-library',
    standalone: true,
    templateUrl: './ad-library.component.html',
    styleUrls: ['./ad-library.component.scss'],
    imports: [AdFiltersComponent, AdSnippetComponent, FormsModule, CommonModule]
})
export class AdLibraryComponent {
    carBrands = [
        { id: 'BMW', name: 'BMW'},
        { id: 'Audi', name: 'Audi'},
        { id: 'Mercedes', name: 'Mercedes'}
    ];

    carModels = [
        { id: '3 Series', name: '3 Series', category: 'BMW' },
        { id: '5 Series', name: '5 Series', category: 'BMW' },
        { id: '6 Series', name: '6 Series', category: 'BMW' },
        { id: 'A5', name: 'A5', category: 'Audi' },
        { id: 'A7', name: 'A7', category: 'Audi' },
        { id: 'CLS', name: 'CLS', category: 'Mercedes' }
    ];

    selectedCategory: string = 'Any';
}
