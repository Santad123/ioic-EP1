import { Storage } from '@ionic/storage';
import {Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Course } from '../../models/course';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
import { LoginhomePage } from '../../pages/loginhome/loginhome';
@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
  template: `
  <form [formGroup]="todo" (ngSubmit)="logForm()">
  <ion-item>
    <ion-label>Username</ion-label>
    <ion-input type="text" formControlName="username"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Password</ion-label>
    <ion-textarea formControlName="password"></ion-textarea>
  </ion-item>
  <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
</form>
`,
})
export class CoursePage {

 posts: any;
 private todo : FormGroup;




 

  constructor(public nav: NavController,public storage: Storage,private formBuilder: FormBuilder,public http:Http,  public navCtrl: NavController, public navParams: NavParams,public  courseServiceProvider : CourseServiceProvider) {
    
    this.todo = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
    });
    
  
  }

 
  logForm(){  

    var username = this.todo.value.username;
    var password = this.todo.value.password;

    var link = 'http://192.168.1.106:81/call.asmx/reValue?username=' + username + '&password=' + password ;
    var link1 = 'http://192.168.1.106:81/call.asmx/reValue?username=admin&password=admin';
      
    this.http.get(link).map(res => res.json()).subscribe(data => {
      
          //select JSon success
          const newsData = data[0].name;
          if(newsData == "success")
          {
            console.log('Login Complete');
            this.storage.set('username','ADMIN');
            localStorage.setItem('token',newsData);
            this.nav.push(LoginhomePage);
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

  



  ionViewWillEnter(){

    
   /*
    var username = 'admin';
    var password = 'admin';

    var link = 'http://192.168.1.106:81/call.asmx/reValue?username=' + username + '&password=' + password ;
    var link1 = 'http://192.168.1.106:81/call.asmx/reValue?username=admin&password=admin2';
    
  
    this.http.get(link).map(res => res.json()).subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  
    */ 
  
  }





  





 

}
