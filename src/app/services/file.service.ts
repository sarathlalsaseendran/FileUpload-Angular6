import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FileService {
  _baseURL: string = 'http://localhost:58730/api/'
  constructor(private http: Http) { }

  upload(files): Observable<any> {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._baseURL + 'fileupload/upload', files, options)
      .pipe(map(
        (response) => {
          return response;
        }, catchError(this.handleError)));
  }

  private handleError(error: Response) {
    return Observable.throw("Unable to update data " + error.statusText);
  }
}