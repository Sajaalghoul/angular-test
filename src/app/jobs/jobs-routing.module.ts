import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:JobsListComponent

},
{
  path:'jobslist',
  component:JobsListComponent

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
