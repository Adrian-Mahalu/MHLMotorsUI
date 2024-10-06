import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Car } from '../models/car-models/car';
import { CarAd } from '../models/car-models/car-ad';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url="Car";
  
  constructor(private http: HttpClient) { }

  public getAllCars() : Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/${this.url}/GetAllCarsAsync`);
  }

  public getCarById(carId: string): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}/${this.url}/GetCarByIdAsync/${carId}`);
  }

   public addCarAdAsync(carAd: CarAd): Observable<CarAd> {
     return this.http.post<CarAd>(`${environment.apiUrl}/${this.url}/AddCarAdAsync`, carAd);
   }
}
 