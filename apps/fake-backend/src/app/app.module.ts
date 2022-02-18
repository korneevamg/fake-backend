import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { fakeBackendProvider } from './fake-backend-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  //providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
