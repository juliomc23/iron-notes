import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent {

}
