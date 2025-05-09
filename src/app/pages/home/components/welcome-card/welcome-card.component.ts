import { DatePipe } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';

@Component({
    selector: 'app-welcome-card',
    imports: [DatePipe],
    templateUrl: './welcome-card.component.html',
    styleUrl: './welcome-card.component.scss'
})
export class WelcomeCardComponent {
  today: number = Date.now();

}
