import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user?: User;

  constructor() { }
}
