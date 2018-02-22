import { Component, OnInit } from '@angular/core';
import { Http,Response,HttpModule, Headers,RequestOptions} from '@angular/http';
import {Router } from '@angular/router';
import {FormsModule } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
creatpo=false;role;makepay=false;procurement=false;warehouse=false;distribute=false;enduser=false;globalfund=false;sel:string;buttonDisabled=true;
hidetab;gf;pa;eu;wh;da;creatgrn=false;graphs=false;design=false;asset=false;construction=false;
constructor(private http: Http, private router: Router) {

    this.role = localStorage.getItem("role");
    if (this.role == "Project Manager") {
      this.creatpo = true;
      this.sel="test1"
      this.graphs=true;
    }
    if (this.role == "Designer") 
    {
      this.design=true;
    this.gf="hidetab";
  this.wh="hidetab";
  this.da="hidetab";
   this.eu="hidetab"; 
   
    }
   else if (this.role == "Asset Manager") 
      {
        this.asset=true;
        this.gf="hidetab";
      this.pa="hidetab";
    this.da="hidetab";
     this.eu="hidetab"; 
     
      }
     else if (this.role == "Network Constructor") 
        {
          this.construction=true;
          this.gf="hidetab";
        this.pa="hidetab";
      // this.wh="hidetab";
       this.eu="hidetab"; 
      
        }
       else if (this.role == "Clinic's"||this.role =="DHO's"||this.role =="Health Centers") 
          {
            this.gf="hidetab";
          this.pa="hidetab";
        this.wh="hidetab";
        this.da="hidetab";
         
          }
    
    
   }

  ngOnInit() {
  }
  
  private _prevSelected: any;
  // handleChange(evt) {
  //   var target = evt.target;
  //   if (target.checked) {
  //     doSelected(target);
  //     this._prevSelected = target;
  //   } else {
  //     doUnSelected(this._prevSelected)
  //   }
  // }
  flag
  progressbar(){
    console.log("haiii")
    $('.radiotxt').val("");
    $('.radiotxt').prop('disabled', true); 
    this.flag='N'; 
    console.log("endd")
  }
  Logout(){
    this.router.navigateByUrl('');
  } 
  createpo(){
    this.router.navigateByUrl('pm');
  } 
  creategrn(){
    this.router.navigateByUrl('grn');
  } 
  Toggle()
  {
    this.router.navigateByUrl('graphs');
    
  }
  Design()
  {
    this.router.navigateByUrl('designer')
  }
  Asset(){
    this.router.navigateByUrl('assetreviewx')
  }
  Constr(){
    this.router.navigateByUrl('constructor') 
  }
}
