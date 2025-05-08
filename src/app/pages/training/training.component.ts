import { Component, WritableSignal, computed, signal } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Exercise } from '../workout/models/exercise.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type DisplayedExercise = Omit<Exercise, 'weight' | 'rir'>;

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  formGroup = new FormGroup({
    weight: new FormControl(null),
    reps: new FormControl(null),
    rir: new FormControl(null),
  });

  addedSerie: WritableSignal<Exercise[]> = signal<Exercise[]>([]);
  wantToAddNewSerieToFill: WritableSignal<boolean> = signal(false);
  exerciseToAddNewSerieToFill: WritableSignal<string | null> = signal(null);

  groupedExercise = computed(() => {
    const group = Object.entries(Object.groupBy(this.addedSerie(), ({ name }) => name))
    return group.map(([name, series]) => ({ name, series }))
  })
  exercises: WritableSignal<DisplayedExercise[]> = signal([
    {
      name: 'Press banca',
      series: 4,
      reps: 12,
    },
    {
      name: 'Press banca inclinado',
      series: 4,
      reps: 12,
    },
    {
      name: 'Cruces de polea superior',
      series: 4,
      reps: 12,
    },
    {
      name: 'Aperturas',
      series: 4,
      reps: 12,
    },
    {
      name: 'Fondos',
      series: 4,
      reps: 12,
    },
    {
      name: 'Press banca',
      series: 4,
      reps: 12,
    },
    {
      name: 'Press banca',
      series: 4,
      reps: 12,
    },
    {
      name: 'Press banca',
      series: 4,
      reps: 12,
    },
    {
      name: 'Press banca',
      series: 4,
      reps: 12,
    },
  ]);

  addSerieToFill(exerciseName: string) {
    this.wantToAddNewSerieToFill.set(true);
    this.exerciseToAddNewSerieToFill.set(exerciseName);
  }

  endSerieToFill() {
    this.wantToAddNewSerieToFill.set(false);
    this.exerciseToAddNewSerieToFill.set(null);
    this.formGroup.reset();
  }

  isAddingSerieTo(exerciseName: string): boolean {
    return this.wantToAddNewSerieToFill() && this.exerciseToAddNewSerieToFill() === exerciseName;
  }

  sendForm(exerciseName: string) {
    const weight = this.formGroup.get('weight')?.value ?? 0;
    const reps = this.formGroup.get('reps')?.value ?? 0;
    const rir = this.formGroup.get('rir')?.value ?? 0;

    if (weight !== null && reps !== null && rir !== null) {
      this.updateDataBase({ name: exerciseName, weight, reps, rir });
    }
    this.endSerieToFill();
  }

  updateDataBase(exercise: Exercise) {
    this.addedSerie.update((prevState) => ([...prevState, exercise]));
  }

  getSeriesCountByExerciseName(exerciseName: string): number {
    return this.addedSerie().filter((exercise) => exercise.name === exerciseName).length;
  }

  hasCompletedAllSeries(exerciseName: string): boolean {
    const maxSeries = this.exercises().find((exercise) => exercise.name === exerciseName)?.series ?? 0;
    return this.getSeriesCountByExerciseName(exerciseName) >= maxSeries;
  }

  getSeriesFor(exerciseName: string): Exercise[] {
    return this.groupedExercise().find((exercise) => exercise.name === exerciseName)?.series ?? [];
  }
}
