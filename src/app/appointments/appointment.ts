// src/app/appointment.ts

import { Employee } from "./employee";
import { Client } from "./client";

export class Appointment {
    id: number;
    employee: Employee;
    client: Client;
    time_display: string;
    start: Date;
    end: Date;

    constructor(
        id: number,
        employee: Employee,
        client: Client,
        time_display: string,
        start: Date,
        end: Date
    ) {
        this.id = id;
        this.employee = employee;
        this.client = client;
        this.time_display = time_display;
        this.start = start;
        this.end = end;
    }
}