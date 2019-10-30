import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalDataService {

  Id: any;

  constructor() { }

  setID(id) {
    this.Id = id;
  }

  getID() {
    return this.Id;
  }
}
