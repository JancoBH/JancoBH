import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorialsCollection: AngularFirestoreCollection<any>;
  tutorials: Observable<any[]>;

  techList = [
    {title: 'Angular', img: './../../../assets/img/angular.svg'},
    {title: 'Firebase', img: './../../../assets/img/firebase.svg'},
    {title: 'JavaScript', img: './../../../assets/img/js.svg'},
    {title: 'Redux', img: './../../../assets/img/Redux.svg'},
    {title: 'Material Design', img: './../../../assets/img/material.svg'},
    {title: 'Angular Universal', img: './../../../assets/img/universal.svg'},
    {title: 'PWA', img: './../../../assets/img/pwa.svg'},
    {title: 'RxJS', img: './../../../assets/img/rxjs.png'}
  ];

  blog = [
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'}
  ];

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
