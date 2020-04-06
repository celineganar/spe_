//post
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
//post
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css','../assets/css/style.css','../assets/css/materialize.css'],
 encapsulation: ViewEncapsulation.None,
 
})

export class AppComponent implements OnInit{
 
 constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {
   
 }

 ngOnInit() {
  
  }

}
