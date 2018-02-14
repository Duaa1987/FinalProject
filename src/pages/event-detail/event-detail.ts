import { Component } from '@angular/core';
import { normalizeURL } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import * as firebase from 'firebase/app';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoListPage } from '../photo-list/photo-list';
@IonicPage({
  segment: 'event-detail/:eventId/:homeworkId'
})
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  public currentEvent: any = {};
  public currenthomework: any = {};
  public guestName: string = '';
  public guestPicture: string = null;

  guestPicture1;
  loading;
  currentPhoto ;
  imgSource;
  filename: string;


  constructor(
    public loadingCtrl:LoadingController ,public camera:Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventProvider: EventProvider,
    public cameraPlugin: Camera
  ) { }

  ionViewDidLoad() {
    this.eventProvider
      .getEventDetail(this.navParams.get('eventId'))
      .on('value', eventSnapshot => {
        this.currentEvent = eventSnapshot.val();
        this.currentEvent.id = eventSnapshot.key;
      });
  }

  takePicture(): void {
    this.cameraPlugin
      .getPicture({
        quality : 100,
        targetHeight:200,
        targetWidth:200,
        destinationType : this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      })
      .then(
      imageData => {
        this.guestPicture = imageData;
      },
      error => {
        console.log("ERROR -> " + JSON.stringify(error));
      }
      );
  }



  gotophoto() {
    this.navCtrl.push('PhotoListPage');
  }


  

  addGuest(guestName:string):void{

    this.eventProvider.addGuest(guestName,this.currentEvent.id,this.guestPicture).then(newGuest=>{
    this.guestName="";
    this.guestPicture=null;
    });
    
    }


  

}