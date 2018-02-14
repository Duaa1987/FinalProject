import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Reference, ThenableReference } from '@firebase/database-types';

/*
  Generated class for the HomeworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeworkProvider {
  public DbRef:firebase.database.Reference;
  constructor() {
    this.DbRef = firebase.database().ref('pictureList')
  }

  //will take the image from the addphoto page, push the image to storage, and then store the downloadUrl and given name of the photo
  
  createPost(pictureName: string, picture: string) {
    firebase.storage().ref('/pictures/').child(pictureName)
    .child('plantPicture.png')
    .putString(picture, 'base64', {contentType: 'image/png'})
    .then((savedPicture) => {
      this.DbRef.child(`/guest22List`).update({
        profilePicture: savedPicture.downloadURL
      });
    }).catch(error => {
      console.log(error);
     
    });
    return 
  }

  //returns the db refrence of our images so we can display them 
  getPhotoList(): firebase.database.Reference {
    return this.DbRef;
  }

}
