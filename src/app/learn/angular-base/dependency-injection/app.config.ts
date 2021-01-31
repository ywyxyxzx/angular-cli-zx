
import { InjectionToken } from '@angular/core';

export interface AppConfig {
    apiEndpoint: string;
    title: string;
  }
  
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};
