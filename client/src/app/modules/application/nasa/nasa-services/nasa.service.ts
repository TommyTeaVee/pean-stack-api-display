import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Apod } from "../nasa-models/apod";
import { catchError, take } from "rxjs/operators";

const apiUrl = "https://api.nasa.gov/planetary/apod?";
//const apiKey = process.env.NASA_KEY;
const apiKey = "i7epslZeterLoOnXPU1I2MlbmgfgnKq0C5NWVvTL";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  constructor(private http: HttpClient) {}

  //  rxjs take(1) takes the first emission of Nasa data and unsubscribes from the observable.
  getNasaImage(): Observable<Apod> {
    const apodUrl = `${apiUrl}&api_key=${apiKey}&hd=true`;
    return this.http.get<Apod>(apodUrl).pipe(
      take(1),
      catchError((err) => {
        throw "error in getting API data. Details: " + err;
      })
    );
  }
}
