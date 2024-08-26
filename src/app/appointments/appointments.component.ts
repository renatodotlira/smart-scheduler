import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import brLocale from '@fullcalendar/core/locales/pt-br';
import { AppointmentService } from './appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
  events: any[] = [];
  constructor(private appointmentService: AppointmentService) {}
  calendarOptions: CalendarOptions = {};
  isLoaded: boolean = false;

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(
      data => {
        this.isLoaded = true;
        console.log(data);
        data.forEach(app => {
          console.log(app);
          this.events.push({
            title: app.employee.name,
            extendedProps: { firstName: app.client.name, time: app.time_display}, 
            start: app.start,
            backgroundColor: '#007bff'
          })
        });

        this.calendarOptions = {
          initialView: 'dayGridMonth',
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          locale: brLocale,
          height: 650,
          eventBackgroundColor: '#ff0000',
          businessHours: [ 
            {
              daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday, Tuesday, Wednesday
              startTime: '08:00', 
              endTime: '19:00'
            },
            {
              daysOfWeek: [ 6 ], // Sturday
              startTime: '10:00', 
              endTime: '16:00' 
            }
          ],
          events: 
            this.events
          
        };


      },
      error => {
        console.error('Erro ao buscar compromissos', error);
      }
    );
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  

}
