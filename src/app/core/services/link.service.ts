import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '@app/models/api';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private jsonUrl = './data/links.json';

  constructor(private http: HttpClient) {}

  getLinks(): Observable<Api> {
    return this.http.get<Api>(this.jsonUrl);
  }
}
