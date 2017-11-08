import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
import {DescriptionPage} from "../description/description";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animeLists: any;

  constructor(public navCtrl: NavController, public dataBase:DatabaseProvider) {

  }

    ionViewDidLoad(){
    this.animeLists = this.dataBase.data;
  }

  buttonClicked(anime):void {
    this.navCtrl.push(DescriptionPage,anime);
  }

}
