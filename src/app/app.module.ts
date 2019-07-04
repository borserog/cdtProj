import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          // base endpoint for components 
          // where to look for validation of data
          baseEndpoint: 'http://example.com/app-api/v1',
          login: {
            endpoint: '/api/auth/login',
            method: 'post'
          },
          register: {
            endpoint: '/api/auth/register',
            method: 'post'
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post'
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post'
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post'
          }
        }),
      ],
      forms: {},
    }),
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
