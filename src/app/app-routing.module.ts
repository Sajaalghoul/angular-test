import { ProgramDetailsComponent } from './components/programs/program-details/program-details.component';
import { HealthComponent } from './components/programs/health/health.component';
import { ComputerComponent } from './components/programs/computer/computer.component';
import { AccountingComponent } from './components/programs/accounting/accounting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { parseTemplate } from '@angular/compiler';

const routes: Routes = [
  {
    path:'',//default
    redirectTo:'home',
    pathMatch: 'full' 
    //component:HomeComponent
  },
  {
    path:'home',
    pathMatch: 'full' ,
    component:HomeComponent
  },
  {
    path:'home/:name/:title/:id',
    pathMatch: 'full' ,
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'jobs',
    loadChildren:()=>import('./jobs/jobs.module').then(m=>m.JobsModule)
  },
  {
    path:'programs',
    component:ProgramsComponent,
    children:[
      {
        path:'',
        component:ProgramDetailsComponent

      },
      {
        path:'accounting',
        component:AccountingComponent

      },
      {
        path:'computer',
        component:ComputerComponent

      },
      {
        path:'health',
        component:HealthComponent

      }

    ]
  },
  {
    path:'**',//wrong routs
    component:PageNotFoundComponent
  }
 
];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
