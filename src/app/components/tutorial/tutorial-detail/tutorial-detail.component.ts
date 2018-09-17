import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {

  tutorial: AngularFirestoreDocument<any>;
  tutorialData: any;
  tutorialSubscription: Subscription;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tutorial = this.afs.doc('post/' + params['id']);
      }
    );

    this.tutorial.ref.get().then(
      documentSnapshot => {
        if (documentSnapshot.exists) {
          this.tutorialSubscription = this.tutorial.valueChanges().pipe(take(1)).subscribe(
            data => {
              this.tutorialData = data;
              console.log(data);
            }
          );
        } else {
          this.router.navigate(['/']).then();
        }
      }
    ).catch(() => {
      setTimeout( () => {
        this.ngOnInit();
      }, 2000);
    });

  }

}
