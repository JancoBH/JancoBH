import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  tutorialsCollection: AngularFirestoreCollection<any>;
  tutorials: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this.tutorialsCollection = db.collection('post', ref => {
      return ref
        .orderBy('fecha', 'desc')
        .where('type', '==', 'tutorial')
        .limit(5);
    });

    this.tutorials = this.tutorialsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
      })
    );
  }

  ngOnInit() {
  }

}
