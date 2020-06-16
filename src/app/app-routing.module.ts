import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './modules/pages/main-page/main-page.component';
import { AboutMeComponent } from './modules/pages/about-me/about-me.component';
import { RelationshipsComponent } from './modules/pages/relationships/relationships.component';
import { RequirementsComponent } from './modules/pages/requirements/requirements.component';
import { UsersComponent } from './modules/pages/users/users.component';
import { SignUpComponent } from './modules/pages/sign-up/sign-up.component';

// Basic application routes
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about_me', component: AboutMeComponent },
  { path: 'relationships', component: RelationshipsComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sign_up', component: SignUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
