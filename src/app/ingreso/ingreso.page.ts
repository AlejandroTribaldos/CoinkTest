import { NumeroCelPage } from './../numero-cel/numero-cel.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  redirectToNumerocelPage() {
    this.navCtrl.navigateForward('/numero-cel'); 
  }
  ngOnInit() {
  }

}
