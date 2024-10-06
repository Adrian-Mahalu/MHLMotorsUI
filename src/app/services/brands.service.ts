import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Brand } from '../models/car-models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private url = "Brand";

  constructor(private http: HttpClient) { }

  public getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiUrl}/${this.url}/GetAllBrandsAsync`);
  }

  public getCommonBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiUrl}/${this.url}/GetCommonBrandsAsync`);
  }
}