//post
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
//post
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
 selector: 'app-create',
 templateUrl: './create.component.html',
 styleUrls: ['./create.component.css','./assets/css/style.css','./assets/css/materialize.css'],
 encapsulation: ViewEncapsulation.None,
 
})

export class CreateComponent implements OnInit{
 name = 'event-names';
 private data:any = []
 SERVER_URL = "http://localhost:4200/upload";
  uploadForm: FormGroup; 
 constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {
   
 }
 
 
 headers =new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer R3GPENLBZHXNXRQYN3A7'
 })



 onSubmit(){
  const event_name= document.getElementById('event_name');
  const start_timezone= document.getElementById('start_timezone');
  const start_utc= document.getElementById('start_utc');
  const end_timezone= document.getElementById('end_timezone');
  const end_utc= document.getElementById('end_utc');
  const currency= document.getElementById('currency');

 

  this.http.post(" https://www.eventbriteapi.com/v3/organizations/416845048919/events/",
  {
    'event.name.html': 'clean up test',
    'event.start.timezone': 'America/Port_of_Spain',
    'event.start.utc': '2020-12-12T02:00:00Z',
    'event.end.timezone': "America/Port_of_Spain",
    'event.end.utc': '2020-12-12T02:00:00Z',
    'event.currency': 'USD'
  },
  {headers:new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer R3GPENLBZHXNXRQYN3A7"
  })
  })
  .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });

 }
 
 

 ngOnInit() {
  this.uploadForm = this.formBuilder.group({
    event_name: [''], 
    start_timezone:[''],
    start_utc:[''],
    end_timezone:[''],
    end_utc:[''],
    currency:['']
  });
  this.onSubmit()
}

onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file1 = event.target.files[0];
    const file2 = event.target.files[1];
    const file3= event.target.files[2];
    const file4 = event.target.files[3];
    const file5 = event.target.files[4];
    const file6 = event.target.files[5];
    
    this.uploadForm.get('event_name').setValue(file1);
    this.uploadForm.get('start_timezone').setValue(file2);
    this.uploadForm.get('start_utc').setValue(file3);
    this.uploadForm.get('end_timezone').setValue(file4);
    this.uploadForm.get('end_utc').setValue(file5);
    this.uploadForm.get('currency').setValue(file6);
  }
}



}
