import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  usuarios: any;

  constructor() {}

  ngOnInit(): void {

    this.getUsuarios().then(datosUsuario => {
      this.usuarios = datosUsuario;
      console.log(datosUsuario);
    });
    //this.getUsuarios2();

    /*const promesa = new Promise((resolve, reject) => {
      //console.log('Una nueva promesa');

      if(false) {
        resolve('Una nueva promesa');
      }
      else {
        reject('ocurrió un error');
      }

    });

    promesa
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });

    console.log("Fin de ngOnInit");*/

  }

  getUsuarios() {//Parte Asincrona
    const promesa = new Promise(resolve =>{
      fetch('https://reqres.in/api/users')//ruta de la api
      .then(res => res.json())
      .then(res => resolve(res.data))
    });
    
    return promesa;

  }

  /*getUsuarios2() {//Parte Sincrona
    fetch('https://reqres.in/api/users').then(res => {
      console.log(res.json())
    })
  }*/

}
