import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {FullAd} from "../models/ad-models/full-ad";

@Injectable({
  providedIn: 'root'
})
export class FullAdService {
  private url = 'http://localhost:3000/ads';

  constructor(private http: HttpClient) { }

  public getFullAdById(id: string): Observable<FullAd> {
    const endpoint = `${this.url}/${id}`;
    return this.http.get<FullAd>(endpoint);
  }
}
