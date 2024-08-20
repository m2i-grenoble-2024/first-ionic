import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from './entities';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<Dog[]>('http://localhost:8000/api/dog');
  }


  add(dog:Dog) {
    return this.http.post<Dog>('http://localhost:8000/api/dog', dog);
  }
}
