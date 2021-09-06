import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //
  //The userId variable used globally between routes
  //
  public userId!: string;

  constructor() { }
}
