import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfoPage } from '../info/info.page'; 

@Component({
  selector: 'app-numero-cel',
  templateUrl: './numero-cel.page.html',
  styleUrls: ['./numero-cel.page.scss'],
})
export class NumeroCelPage implements OnInit {

  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numero: number[] = [0];
  numeroIngresado: string = '';

  constructor(private navCtrl: NavController) {}

  agregarNumero(num: number) {
    this.numeroIngresado += num.toString();
  }
  borrarUltimoNumero() {
    this.numeroIngresado = this.numeroIngresado.slice(0, -1);
  }

  redirectToInfoPage() {
    this.navCtrl.navigateForward('/info'); 
  }

  ngOnInit() {
  }

}
