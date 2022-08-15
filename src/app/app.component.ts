import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-project';
  queryObject={filter:"name",pageNo:5}
  name:string="saja";
  Title:string="home-page";
  id:string="l1";
  
 
}
