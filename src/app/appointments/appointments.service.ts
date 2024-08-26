// src/app/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    private apiUrl = 'http://localhost:3000/api/appointments';

    constructor(private http: HttpClient) { }

    getAppointments(): Observable<Appointment[]> {
        return this.http.get<any>(this.apiUrl);
    }
}
