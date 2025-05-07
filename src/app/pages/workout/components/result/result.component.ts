import { Component, InputSignal, input } from '@angular/core';
import { Exercise } from '../../models/exercise.interface';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  results: InputSignal<Exercise[]> = input.required<Exercise[]>();
}
