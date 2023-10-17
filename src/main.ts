import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ConstantsServiceToken } from './app/core/services/constants.service';
import { GeneratedStringToken } from './app/core/services/generated-string.token';
import { GeneratorFactory } from './app/core/services/generator.factory';
import { GeneratorService } from './app/core/services/generator.service';
import { LocalStorageService } from './app/core/services/local-storage.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TimingInterceptor } from './app/core/interceptors/timing.interceptor';


const constants = {
  App: "Shop",
  Version: '1.0',
  API_URL: "http://localhost:4200",
};


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    // так добавляется HttpClient и интерсепторы, которые реализованы как класы
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },

    { provide: ConstantsServiceToken, useValue: constants },
    { provide: GeneratedStringToken, useFactory: GeneratorFactory, deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: new LocalStorageService() },
  ],

}).catch(err => console.error(err));
