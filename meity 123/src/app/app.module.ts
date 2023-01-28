import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEventCalendarModule } from 'ngx-event-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { StartupComponent } from './components/startup/startup.component';
import { IncubatorComponent } from './components/incubator/incubator.component';
import { GrantManagementComponent } from './components/grant-management/grant-management.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ConnectComponent } from './components/connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryHandlingComponent } from './components/query-handling/query-handling.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthFooterComponent } from './core/auth-footer/auth-footer.component';

import { EventDialogComponent } from './components/calendar/event-dialog/event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEventDialogComponent } from './components/calendar/add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent } from './components/calendar/edit-event-dialog/edit-event-dialog.component';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery'
import { AxiosServicesService } from './services/axios/axios-services.service';
import { BaseHttpClientAxiosService } from './services/axios/base-http-client-axios.service';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    StartupComponent,
    IncubatorComponent,
    GrantManagementComponent,
    ChallengeComponent,
    ConnectComponent,
    DashboardComponent,
    QueryHandlingComponent,
    LoginComponent,
    RegistrationComponent,
    CalendarComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    AuthFooterComponent,
    EventDialogComponent,
    AddEventDialogComponent,
    EditEventDialogComponent,
  ],
  imports: [
    NgxEventCalendarModule,
    CollapseModule.forRoot(),
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [MatSelectModule, MatFormFieldModule, MatInputModule],
  providers: [
    TranslateService,
    AxiosServicesService,
    {
      provide: 'HttpClientService', // our interface
      useClass: BaseHttpClientAxiosService, // the base class we can switch to
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
