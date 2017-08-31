import { GlobalService } from './global.service';
import { HttpService } from './http.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    HttpService,
    GlobalService
  ]
})
export class AppServicesModule {}