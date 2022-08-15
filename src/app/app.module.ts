import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountingComponent } from './components/programs/accounting/accounting.component';
import { ComputerComponent } from './components/programs/computer/computer.component';
import { HealthComponent } from './components/programs/health/health.component';
import { ProgramDetailsComponent } from './components/programs/program-details/program-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProgramsComponent,
    PageNotFoundComponent,
    AccountingComponent,
    ComputerComponent,
    HealthComponent,
    ProgramDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 

 }
