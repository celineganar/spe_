import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component';

import { RouterModule } from '@angular/router';
import { HomepageModule } from './homepage/homepage.module';
import { EventsModule } from './events/events.module';
import { CreateModule } from './create/create.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot([]),
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   HomepageModule,
   EventsModule,
   CreateModule,
   AppRoutingModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }