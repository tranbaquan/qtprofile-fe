import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QTProfileComponentModule } from '../component/qtprofile-component.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    QTProfileComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
