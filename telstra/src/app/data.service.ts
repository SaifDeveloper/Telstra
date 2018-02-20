import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class DataService {

  private url = './assets/data.json';



  constructor(private http:HttpClient) {

  }

  getData(){
    return this.http.get(this.url);
  }

}
