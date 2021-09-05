import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post';

const httpOptions = 
{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5000/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable < Post [] > {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
