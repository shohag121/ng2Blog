import { Injectable } from '@angular/core';
import {Email} from "./email";
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class EmailService {

  private mgurl: string = "https://api.mailgun.net/v3/mg.shazahanul.ml";
  constructor(private http: Http) { }
  postEmail(data): Observable<Email> {
    var headers = new Headers();
    headers.append("Authorization", "Basic "+btoa("api:key-1fda7ae1c5299000e3d1f7376490c1b5"));
    var mail = {
      from : data.email,
      to : "shohag121@gmail.com",
      subject : "Contact form request",
      text : data.message
    };
    return this.http.post(this.mgurl, mail, headers)
      .map((res: Response) => res.json());
  }

}
