import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileuploadService {

  constructor(private _http:HttpClient) { }

  public uploadFile(formdata){
    let url = "http://localhost:8080/upload/";
    return this._http.post(url,formdata)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response){
    console.log('Error Occured:'+error);
    return Observable.throw(error || 'Some error occured on server!')
  }


}
