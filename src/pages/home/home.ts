import { Storage } from '@ionic/storage';
import { Component,Pipe } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts : any;
 
  
  constructor(public storage: Storage,public navCtrl: NavController,public http: Http) {

      //this.storage.remove('username');
    
      /*this.storage.get('username').then((val) => {
        console.log('username  is', val);
      });
*/
    
    



  }


  ionViewWillEnter(){
    this.getValue();
  }

  
  getValue()
  {
   
    let api1 : string = "http://192.168.1.106:81/call.asmx/HelloWorld";
    let api2 : string = "http://www.khorkraktimber.com/json.php";

   
    this.http.get(api1).map(res => res.json()).subscribe(data => {
      this.posts = data;
      //console.log(this.posts);
    });
  }







}
