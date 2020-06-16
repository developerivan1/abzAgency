import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module/material/material.module';
import { MaterialFileInputModule  } from 'ngx-material-file-input';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';


import { AcquaintedComponent } from './components/acquainted/acquainted.component';
import { CheerfulUsersComponent } from './components/cheerful-users/cheerful-users.component';
import { RegisterComponent } from './components/register/register.component';
import { CheerfulUserComponent } from './components/cheerful-user/cheerful-user.component';
import { PageOnDevelopmentComponent } from './components/page-on-development/page-on-development.component';
import { CompleteRegisterModalComponent } from './components/complete-register-modal/complete-register-modal.component';

@NgModule({
  declarations: [
    AcquaintedComponent,
    CheerfulUsersComponent,
    RegisterComponent,
    CheerfulUserComponent,
    PageOnDevelopmentComponent,
    CompleteRegisterModalComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    SimpleSmoothScrollModule
  ],
  exports: [
    AcquaintedComponent,
    CheerfulUsersComponent,
    RegisterComponent,
    CheerfulUserComponent,
    PageOnDevelopmentComponent,
    CompleteRegisterModalComponent
  ]
})

export class SharedModule { }
