import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','./assets/css/style.css','./assets/css/materialize.css'],
  encapsulation: ViewEncapsulation.None,
 })
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
