import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Engine } from '../models/car-models/engine';

@Injectable({
  providedIn: 'root'
})
export class EnginesService {
  private url = "Engine";

  constructor(private http: HttpClient) { }

  public getAllEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(`${environment.apiUrl}/${this.url}/GetAllEnginesAsync`);
  }

  public getEnginesByGenerationName(generationName: string): Observable<Engine[]> {
    return this.http.get<Engine[]>(`${environment.apiUrl}/${this.url}/GetEnginesByGenerationNameAsync/${generationName}`);
  }
}