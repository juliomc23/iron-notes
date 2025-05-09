import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { WorkoutExercisesComponent } from "./components/workout-exercises/workout-exercises.component";
import { TodayExercisesResultComponent } from "./components/today-exercises-result/today-exercises-result.component";
import { LastExercisesResultComponent } from "./components/last-exercises-result/last-exercises-result.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-workout',
    imports: [RouterLink, FooterComponent, WorkoutExercisesComponent, TodayExercisesResultComponent, LastExercisesResultComponent],
    templateUrl: './workout.component.html',
    styleUrl: './workout.component.scss'
})
export class WorkoutComponent {

}
