import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  img1:string ='assets/carrito.svg';
  img2:string ='assets/lapiz.svg';
  img3:string ='assets/productos.svg';
  img4:string ='assets/calculadora.svg';

  msg1:string ='mensaje';
  msg2:string ='mensaje';
  msg3:string ='mensaje';
  msg4:string ='mensaje';
  
  constructor() { }

  ngOnInit(): void {
  }

}
