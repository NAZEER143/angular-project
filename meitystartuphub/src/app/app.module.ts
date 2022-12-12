import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './meity_startup_Hub/home/home.component';
import { AboutComponent } from './meity_startup_Hub/about/about.component';
import { StartupsComponent } from './meity_startup_Hub/startups/startups.component';
import { IncubatorsComponent } from './meity_startup_Hub/incubators/incubators.component';
import { ChallengesComponent } from './meity_startup_Hub/challenges/challenges.component';
import { ProgramsComponent } from './meity_startup_Hub/programs/programs.component';
import { PoliciesComponent } from './meity_startup_Hub/policies/policies.component';
import { FacilitesComponent } from './meity_startup_Hub/facilites/facilites.component';
import { ReachusComponent } from './meity_startup_Hub/reachus/reachus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    HomeComponent,
    AboutComponent,
    StartupsComponent,
    IncubatorsComponent,
    ChallengesComponent,
    ProgramsComponent,
    PoliciesComponent,
    FacilitesComponent,
    ReachusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatToolbarModule,MatMenuModule,MatCardModule]
})
export class AppModule { }
