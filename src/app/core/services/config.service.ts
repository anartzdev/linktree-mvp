import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '@app/models/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // Estado inicial de configuración
  private configSubject = new BehaviorSubject<Config>({
    backgroundColor: '#ffffff',
    fontFamily: "'Roboto, sans-serif'",
    textColor: '#000000',
    headerColor: 'black',
  });

  // Observable para escuchar cambios de configuración
  config$ = this.configSubject.asObservable();

  private jsonUrl = './data/page-config.json';

  private http = inject(HttpClient);

  loadConfig(): Observable<any> {
    return this.http.get(this.jsonUrl).pipe(
      catchError(() => {
        console.warn(
          'No se encontró config.json. Cargando configuración por defecto.'
        );
        return of(this.configSubject.value);
      })
    );
  }

  // Método para actualizar configuración
  setConfig(newConfig: any) {
    this.configSubject.next({ ...this.configSubject.value, ...newConfig });
  }

  // Método para obtener la configuración actual
  getConfig() {
    return this.configSubject.value;
  }
}
