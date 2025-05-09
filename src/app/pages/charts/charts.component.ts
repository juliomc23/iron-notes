import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart'
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {

}
