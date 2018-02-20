import { Component, OnInit } from '@angular/core';
import { Http,Response,HttpModule, Headers,RequestOptions} from '@angular/http';
import {Router } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { config as mconfig } from './config';
import {config as dconfig} from '../config';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responsedata;role;
  roles:any[];userID;userSecret;
  samplejson:any[];
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.roles=["Project Manager","Designer","Network Constructor","Asset Manager"];
    this.samplejson=mconfig;
  }

  Login()
  {    
var si=this.samplejson.filter(((item)=>item.role==this.role && item.userID==this.userID && item.userSecret==this.userSecret)); 
if(si.length>0)
{
console.log(si[0].id);
  let headers = new Headers({
    'Content-Type': 'application/json'
});
let options = new RequestOptions({
    headers: headers
});
let body = ""; 
let url=dconfig.loginurl.concat(si[0].id);
console.log(url);
this.http.post(url , body, options).subscribe(res => {
this.responsedata= res.json();
 localStorage.setItem("role",this.role);
 console.log("outside",localStorage.getItem("role"));
 });
this.router.navigateByUrl('Main');
}
  localStorage.setItem("role",this.role);
  console.log("inside",localStorage.getItem("role"));
 this.router.navigateByUrl('Main');

}
} 