import { AppFormsModule } from './../../common/form/forms.module';
import { ShowPanelComponent } from './../../components/show-panel/show-panel';
import { ShowHtmlComponent } from './../../components/show-html/show-html';
import { ShowCommentComponent } from './../../components/show-comment/show-comment';
import { ShowImageComponent } from './../../components/show-image/show-image';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyService } from './survey.service';
import { SurveyPage } from './survey';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        SurveyPage,
        ShowImageComponent,
        ShowCommentComponent,
        ShowHtmlComponent,
        ShowPanelComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppSurveyModule),
        AppFormsModule
    ],
    providers: [
        SurveyService
    ],
    entryComponents: [
        SurveyPage
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppSurveyModule { }
