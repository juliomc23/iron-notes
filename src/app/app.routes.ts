import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Type } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { TrainingComponent } from './pages/training/training.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadComponent: (): Promise<Type<LoginComponent>> => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', loadComponent: (): Promise<Type<HomeComponent>> => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'train', loadComponent: (): Promise<Type<WorkoutComponent>> => import('./pages/workout/workout.component').then(m => m.WorkoutComponent) },
  { path: 'training', loadComponent: (): Promise<Type<TrainingComponent>> => import('./pages/training/training.component').then(m => m.TrainingComponent) }
];
