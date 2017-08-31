import { SurveyPage } from './../survey/survey';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
* @description home sorter component. get survey from link and navigates to survey page or shows error if link is expired
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    private nav: NavController
  ) {}

  ngOnInit(): void {
    this.goSurvey();
  }

  private goSurvey(): void {
    this.nav.push(SurveyPage);
  }

}
