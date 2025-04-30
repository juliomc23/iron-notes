import { Component } from '@angular/core';
import { WelcomeCardComponent } from "./components/welcome-card/welcome-card.component";
import { TodayTrainComponent } from './components/today-train/today-train.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeCardComponent, TodayTrainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
