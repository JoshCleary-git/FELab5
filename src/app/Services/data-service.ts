import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient){}

  // Creates student api object
  GetStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019cb856-cf3e-74c9-bd22-1f5ac11dc5b4');
  }

  // Creates weather api object
  GetWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  } 
}
