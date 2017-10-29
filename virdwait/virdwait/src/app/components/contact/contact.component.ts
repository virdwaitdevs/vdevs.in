import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor(public af:AngularFireDatabase, public aAuth: AngularFireAuth) {
    this.items = af.list('', {
      query: {
        limitToLast: 50
      }
    });
    console.log(this.items);
   }
  type:string = 'pending';
  newPurpose:string = "new";
  ngOnInit() {
  }
  setType(value){
    this.type=value;
  }
  setPurpose(value){
    this.newPurpose = value;
  }

}
