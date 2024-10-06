import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { Generation } from '../models/car-models/generation';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {
  private url = "Generation";

  constructor(private http: HttpClient) { }

  public getAllGenerations(): Observable<Generation[]> {
    return this.http.get<Generation[]>(`${environment.apiUrl}/${this.url}/GetAllGenerationsAsync`);
  }

  public getGenerationsByModelName(modelName: string): Observable<Generation[]> {
    return this.http.get<Generation[]>(`${environment.apiUrl}/${this.url}/GetGenerationsByModelNameAsync/${modelName}`);
  }
}