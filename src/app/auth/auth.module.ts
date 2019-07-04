import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbDatepickerModule,
  NbLayoutModule
} from '@nebular/theme';
import { NgxLoginComponent } from './login/ngx-login.component';
import { NgxRegisterComponent } from './register/ngx-register.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDatepickerModule,
    NbLayoutModule,

    NbAuthModule
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent],
})
export class NgxAuthModule { }
