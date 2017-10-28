import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import {App,  IonicPage, NavController, NavParams,LoadingController,ViewController } from 'ionic-angular';


import {HttppProvider} from '../../providers/httpp/httpp';

import {HomePage} from '../../pages/home/home';
import {ListPage} from '../../pages/list/list';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers:[HttppProvider],
  
})
export class DetailPage {


  loading: any;
  

  constructor(public storage: Storage,public nav: NavController, public appCtrl: App, public viewCtrl: ViewController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private httpProvider:HttppProvider) {
    
    
    this.loading = this.loadingCtrl.create({
      content: `
      <ion-spinner ></ion-spinner>`
    });
    this.getdata();

    
  }




  getdata(){

   
    









  


    this.httpProvider.getJsonData().subscribe(
      result => {

       //select JSon success
        const newsData = result[0].name;
        if(newsData == "success")
        {
          console.log('Login Complete');
          //this.storage.set('username','santad');
         // this.nav.push(ListPage);
        }
        else
        {
          console.log('Login Fail!!!');
        }      
        
      },
      err =>{
        console.error("Error : "+err);//select JSon fail
      } ,
      () => {
        console.log('getData completed');
      }
    );


    


  }






}
