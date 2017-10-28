import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttppProvider {

  constructor(public http: Http) {
    console.log('Hello HttppProvider Provider');
  }

  getJsonData(){
    return this.http.get('http://192.168.1.106:81/call.asmx/reValue?username=admin&password=admin')
    .map(res => res.json());
    
  }

}
