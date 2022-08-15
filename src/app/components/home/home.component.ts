import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:string="";
  name:string="";
  title:string="";
  subscriptionForParams: Subscription;
  subscriptionForQueryParams: any;
  pageNo: number=0;
  filter:string="sm";
  constructor(private route:ActivatedRoute) { }
// begin:called for first loading for ngOninit
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('name')){
      this.name=this.route.snapshot.paramMap.get('name');
      console.log("name",this.name)
    }
    if(this.route.snapshot.paramMap.has('title')){
      this.title=this.route.snapshot.paramMap.get('title');
      console.log("title",this.title)
    }

    if(this.route.snapshot.paramMap.has('id')){
      this.id=this.route.snapshot.paramMap.get('id');
      console.log(`loading data ${this.id}`)

    }
//// end:called for first loading for ngOninit


/////call this.route.params
//register callback function in subscribe methode in params observable
//callback function will be invoked when the url params upodated  and the component still loaded
  this.subscriptionForParams=this.route.params.subscribe(//object that keeps the registration of the call back function in the background
    (params:Params)=>{
      this.name=params['name']
      this.id=params['id']
      this.title=params['title']
      console.log('URL params updated....', this.name,this.title,this.id)
    }
  )
   

   //to get params from url query params:url?param1=value1&param2=value2
   this.route.queryParams.subscribe(
    params=>{
      this.filter=params['filter']
      console.log('filter',this.filter)
      this.pageNo=params['pageNo']
      console.log('pageNo',this.pageNo)
    }
   )
   //in ngOnDestroy->unsubscribe the subscribtion object

  

}
  
ngOnDestroy():void{
  if(this.subscriptionForParams){//for no errors 
    this.subscriptionForParams?.unsubscribe();
  }
  if(this.subscriptionForQueryParams){//for no errors 
    this.subscriptionForQueryParams.unsubscribe();
  }
  
 }}

