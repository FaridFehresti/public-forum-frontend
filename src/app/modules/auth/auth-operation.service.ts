import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIConfig } from "../../core/api-config";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AuthOperationService {
    constructor(private http: HttpClient, private apiConfig: APIConfig) { }

    /** Homeworks api */
    loginUser(body:{email:string, password:string}): Observable<any> {
      return this.http.post<any>(this.apiConfig.authUrls.login, body);
    }
}