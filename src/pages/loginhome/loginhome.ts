import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginhome',
  templateUrl: 'loginhome.html',
})
export class LoginhomePage {

  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    
     this.storage.get('username').then((val) => {
        //console.log('username from page loginhome :', val);
        alert('storage:' + val);
      });
  
  }

  
logout(){
  this.storage.remove('username');
  localStorage.removeItem('token');
  this.check();

}
check(){
  this.storage.get('username').then((val) => {
    //console.log('username from page loginhome :', val);
    alert('storage:' + val);
  });
}




}
