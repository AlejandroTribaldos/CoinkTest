import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IngresoPage } from '../ingreso/ingreso.page';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  redirectToIngresoPage() {
    this.navCtrl.navigateForward('/ingreso'); 
  }
  ngOnInit() {
  }

}
