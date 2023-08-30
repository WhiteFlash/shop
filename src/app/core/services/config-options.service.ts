import { Injectable } from '@angular/core';

class ConfigModel {
  constructor(
    public id: number | string | null,
    public login: string,
    public email: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config = new ConfigModel(1, 'LogIn', 'Email@email.com');

  setConfig(newConfig: ConfigModel) {
    this.config = newConfig;
  }

  setConfigProperty<T extends keyof ConfigModel>(key: T, value: ConfigModel[T]): void {
    this.config[key] = value;
  }

  getConfig(): ConfigModel {
    return this.config;
  }
}
