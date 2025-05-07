import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkoutExercisesComponent } from "../../../workout/components/workout-exercises/workout-exercises.component";

@Component({
  selector: 'app-today-train',
  standalone: true,
  imports: [RouterLink, WorkoutExercisesComponent],
  templateUrl: './today-train.component.html',
  styleUrl: './today-train.component.scss'
})
export class TodayTrainComponent {

}
