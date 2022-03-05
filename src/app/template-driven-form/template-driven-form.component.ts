import { Component, OnInit } from '@angular/core';
import { Registration } from '../data/Registration';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  registration : Registration = {
  name: "Peter",
  notifications: true,
  alerts: true,
  gender: 'Male',
  subscriptionType: 'Annual',
  notes: 'This is my notes'
  };

  constructor() { }

  ngOnInit() {
  }

}
