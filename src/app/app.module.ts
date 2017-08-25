import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Angular Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Service Imports
import { SettingsService } from './services/settings.service';
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';

export const firebaseConfig ={
    apiKey: "AIzaSyAy8ChhUAwRNA2FAlsKkM34vZscImDTyr8",
    authDomain: "clientpanel-52983.firebaseapp.com",
    databaseURL: "https://clientpanel-52983.firebaseio.com",
    storageBucket: "clientpanel-52983.appspot.com",
    messagingSenderId: "1080347899150"
}

const appRoutes: Routes = [
  {path:'', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent, canActivate: [RegisterGuard]},
  {path:'login', component: LoginComponent},
  {path:'add-client', component: AddClientComponent, canActivate: [AuthGuard]},
  {path:'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard]},
  {path:'edit-client/:id', component: EditClientComponent, canActivate: [AuthGuard]},
  {path:'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path:'**', component: PageNotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    ClientDetailsComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    ClientService, 
    AngularFireAuth, 
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    RegisterGuard,
    SettingsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
