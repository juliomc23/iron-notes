import { ApplicationConfig, LOCALE_ID, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { provideServiceWorker } from '@angular/service-worker'

registerLocaleData(es);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), { provide: LOCALE_ID, useValue: 'es-ES' }, provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })],
};
