import { SplashPage } from './../splash/splash.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage implements OnInit {
  aceptaTerminos: boolean = false;
  constructor(private navCtrl: NavController) {}

  redirectToSplashPage() {
    this.navCtrl.navigateForward('/splash'); 
  }

  ngOnInit() {
  }

}
