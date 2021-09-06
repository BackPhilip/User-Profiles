import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post';

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
export class PostService {
  private apiUrl = 'http://localhost:5000/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable < [] > {
    return this.http.get<[]>('https://dummyapi.io/data/v1/post?limit=10', httpOptions);
  }
}
