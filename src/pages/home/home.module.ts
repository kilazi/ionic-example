import { IonicModule } from 'ionic-angular';
import { HomePage } from './home';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicModule.forRoot(AppHomeModule),
    ],
    entryComponents: [
        HomePage
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppHomeModule { }
