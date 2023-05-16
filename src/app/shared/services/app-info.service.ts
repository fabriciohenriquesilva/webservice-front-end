import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Webservice Front End';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
