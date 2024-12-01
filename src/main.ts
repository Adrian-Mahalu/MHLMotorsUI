import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './app/components/home/home.component';
import { BrandLibraryComponent } from './app/components/car-management/brands/brand-library/brand-library.component';
import { CarFormComponent } from './app/components/ad-management/car-form/car-form.component';
import { ModelLibraryComponent } from './app/components/car-management/models/model-library/model-library.component';
import { GenerationLibraryComponent } from './app/components/car-management/generations/generation-library/generation-library.component';
import { EngineLibraryComponent } from './app/components/car-management/engines/engine-library/engine-library.component';
import { CarInfoComponent } from './app/components/car-management/car-info/car-info.component';
import { AdLibraryComponent } from './app/components/ad-management/ad-library/ad-library.component';
import { PageNotFoundComponent } from './app/components/page-not-found/page-not-found.component';
import {FullCarAdComponent} from "./app/components/ad-management/full-car-ad/full-car-ad.component";

const appRoute: Routes = [
  { path: 'PageNotFound', component: PageNotFoundComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Brands', component: BrandLibraryComponent },
  { path: 'CarForm', component: CarFormComponent },
  { path: 'Brands/Models/:brandName', component: ModelLibraryComponent },
  { path: 'Brands/Models/:brandName/Generations/:modelName', component: GenerationLibraryComponent },
  { path: 'Brands/Models/:brandName/Generations/:modelName/Engines/:generationName', component: EngineLibraryComponent },
  { path: 'Brands/Models/:brandName/Generations/:modelName/Engines/:generationName/CarInfo/:carId', component: CarInfoComponent },
  { path: 'Ads', component: AdLibraryComponent },
  { path: 'Ads/Home', component: HomeComponent },
  { path: 'Ads/:guid', component: FullCarAdComponent },
  { path: '', component: HomeComponent }
]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoute)
    )
  ]
}).catch(err => console.error(err));
