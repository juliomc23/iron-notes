import { Component, computed, } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FooterComponent } from '../../shared/components/footer/footer.component';
@Component({
  selector: 'app-charts',
  imports: [ChartModule, FooterComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  data: any;
  options: any;
  trainingDates: Date[] = [];

  constructor() {
    this.generateTrainingDates();
  }

  ngOnInit() {
    this.initializeChart();
  }

  // Genera 13 fechas de entrenamiento (3 días por semana)
  generateTrainingDates() {
    const startDate = new Date(); // Fecha actual
    let currentDate = new Date(startDate);
    let trainingCount = 0;

    // Retrocedemos en el tiempo para tener datos históricos
    currentDate.setDate(currentDate.getDate() - 30); // Comenzamos 30 días atrás

    while (trainingCount < 13) {
      // Añadir fecha de entrenamiento (lunes, miércoles, viernes)
      if ([1, 3, 5].includes(currentDate.getDay())) { // 1:lunes, 3:miércoles, 5:viernes
        this.trainingDates.push(new Date(currentDate));
        trainingCount++;
      }
      currentDate.setDate(currentDate.getDate() + 1); // Avanzar un día
    }

    // Ordenar fechas de más antigua a más reciente
    this.trainingDates.sort((a, b) => a.getTime() - b.getTime());
  }

  initializeChart() {
    // Formatear las fechas para mostrarlas mejor
    const labels = this.trainingDates.map(date => this.formatDate(date));

    // Datos de ejemplo (peso simulado)
    const weights = this.trainingDates.map(date => this.calculateWeight(date));

    this.data = {
      labels: labels,
      datasets: [
        {
          label: 'Progreso',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: weights,
          barPercentage: 0.8,
          categoryPercentage: 0.9
        }
      ]
    };

    this.options = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Peso (kg)'
          }
        },
        y: {
          ticks: {
            autoSkip: false // Para mostrar todas las fechas
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              return `Peso: ${context.raw} kg (${this.formatFullDate(this.trainingDates[context.dataIndex])})`;
            }
          }
        }
      }
    };
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short'
    });
  }

  private formatFullDate(date: Date): string {
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  }

  private calculateWeight(date: Date): number {
    // Simulación: peso aumenta con cada entrenamiento
    const daysFromStart = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return 70 + (13 - daysFromStart / 2.5); // Peso base 70kg con progresión
  }
}
