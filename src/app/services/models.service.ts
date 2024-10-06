import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Model } from '../models/car-models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private url = "Model";

  constructor(private http: HttpClient) { }

  public getModelsByBrandName(brandName: string): Observable<Model[]> {
    const url = `${environment.apiUrl}/${this.url}/GetModelsByBrandNameAsync/${brandName}`;
 
    return this.http.get<Model[]>(url);
  }

  // public getModelsByBrandIdWithoutObservable(brandId: string) {
  //   const url = `${environment.apiUrl}/${this.url}/GetCarModelsByBrandIdAsync/${brandId}`;

  //   return this.http.get<Model[]>(url);
  // }
}