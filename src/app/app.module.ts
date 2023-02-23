import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import {AvatarModule} from 'primeng/avatar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './home/home.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    SharedModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    AvatarModule,
    InputTextareaModule,
    InputTextModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
