import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  openDevice(selectedDevice: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/open-device`, { selectedDevice });
  }
}
