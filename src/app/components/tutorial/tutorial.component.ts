import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  tutorials: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this.tutorials = db.collection('post', ref => {
      return ref
        .orderBy('fecha', 'desc')
        .where('type', '==', 'tutorial');
    }).valueChanges();
  }

  ngOnInit() {
  }

}
