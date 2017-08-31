import { ObjectMap } from './../../common/helpers/object-map.interface';
import { GlobalService } from './../../common/global.service';
import { SurveyService, Survey } from './survey.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
* @description shows survey itself, sorts top-level elements by types; 
* validates every panel with two-way data binding
*/
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage implements OnInit {
  private survey: Survey;
  /**
  * @description validation is object of two-way data bindings with "valid" attribute of every panel form
  */
  private validation: ObjectMap<boolean> = {};
  constructor(
    private nav: NavController,
    private surveyService: SurveyService,
    private gs: GlobalService
  ) {

  }

  ngOnInit(): void {
    this.gs.simpleLoading(true);
    this.surveyService.getSurvey('0.2').subscribe(survey => {
      this.gs.simpleLoading(false);
      this.survey = survey;
    })
  }

  private try(): void {
    console.log(this.validation, 'VALIDATION');
  }

}
