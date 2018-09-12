import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogList = [
    {title: 'Como Subir tu App Angular al hosting gratuito de Firebase', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/blog%2Fdeploy-firebase-angular-app.jpg?alt=media&token=49ecf5b1-ba29-47d0-a78b-139c2707163f'},
    {title: 'Como usar Font Awesome en tu App Angular', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/blog%2Ffont-awesome-angular-app.jpg?alt=media&token=aa894041-f159-4eb6-8865-b18c6570a449'},
    {title: 'Como Subir tu App Angular al hosting gratuito de Firebase', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/blog%2Fdeploy-firebase-angular-app.jpg?alt=media&token=49ecf5b1-ba29-47d0-a78b-139c2707163f'},
    {title: 'Como Subir tu App Angular al hosting gratuito de Firebase', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/blog%2Fdeploy-firebase-angular-app.jpg?alt=media&token=49ecf5b1-ba29-47d0-a78b-139c2707163f'},
    {title: 'Como Subir tu App Angular al hosting gratuito de Firebase', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/blog%2Fdeploy-firebase-angular-app.jpg?alt=media&token=49ecf5b1-ba29-47d0-a78b-139c2707163f'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
