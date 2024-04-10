import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContratoPage } from '../contrato/contrato.page';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  formularioDatos = {
    tipdoc: '',
    numdoc: '',
    fechaven: '',
    fechanac: '',
    gene: '',
    correoele: '',
    pinseg: '', 
    correoelec: '',
    pinsegc: ''
  };
  tiposDoc: string[] = ['Tarjeta de identidad', 'Cédula de ciudadanía', 'Cédula de extranjería'];
  genero: string[] = ['Femenino', 'Masculino'];
  constructor(private navCtrl: NavController) {}


  onSubmit() {
    console.log('Datos del formulario:', this.formularioDatos);
    this.navCtrl.navigateForward('/contrato'); 
  }
  ngOnInit() {
  }

}
