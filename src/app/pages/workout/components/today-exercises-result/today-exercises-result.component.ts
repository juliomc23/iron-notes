import { Component, WritableSignal, signal } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { Exercise } from '../../models/exercise.interface';

@Component({
  selector: 'app-today-exercises-result',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './today-exercises-result.component.html',
  styleUrl: './today-exercises-result.component.scss'
})
export class TodayExercisesResultComponent {
  expanded: WritableSignal<boolean> = signal(false)
  results: Exercise[] = [
    {
      name: 'Press de banca',
      weight: 80,
      rir: 1,
      reps: 9
    },
    {
      name: 'Press frances',
      weight: 80,
      rir: 1,
      reps: 9
    },
    {
      name: 'Fondos paralelas',
      weight: 80,
      rir: 1,
      reps: 9
    }
  ]

  expand() {
    this.expanded.update((prev) => !prev)
  }
}
