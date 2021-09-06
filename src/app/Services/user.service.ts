import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';

const httpOptions = 
{
  headers: new HttpHeaders({
    "app-id": "613510159c64bb8442b1ff5d",
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable < [] > {
    return this.http.get<[]>('https://dummyapi.io/data/v1/user?limit=10', httpOptions);
  }

  getUser(userId: string): Observable < User > {
    return this.http.get< User >("https://dummyapi.io/data/v1/user/" + userId, httpOptions);
  }
}