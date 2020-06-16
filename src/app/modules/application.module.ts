import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { SharedModule } from '../shared/shared.module';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RelationshipsComponent } from './pages/relationships/relationships.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { UsersComponent } from './pages/users/users.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CompleteRegisterModalComponent } from '../shared/components/complete-register-modal/complete-register-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  entryComponents: [CompleteRegisterModalComponent],
  declarations: [
    MainPageComponent,
    AboutMeComponent,
    RelationshipsComponent,
    RequirementsComponent,
    UsersComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SimpleSmoothScrollModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class ApplicationModule { }
