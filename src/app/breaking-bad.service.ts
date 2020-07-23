import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Character} from './character'


@Injectable({
  providedIn: 'root',
})
export class BreakingBadService {
  constructor(private http: HttpClient) {}

  fetchItems() {
    return this.http.get<Character[]>("https://breakingbadapi.com/api/characters");
  }
}
