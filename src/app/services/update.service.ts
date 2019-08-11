import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
}
