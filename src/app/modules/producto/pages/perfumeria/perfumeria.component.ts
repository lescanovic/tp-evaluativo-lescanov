import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-perfumeria',
  templateUrl: './perfumeria.component.html',
  styleUrls: ['./perfumeria.component.css']
})
export class PerfumeriaComponent {
public info:  Producto[]
constructor(public crudService: CrudService){
  this.info = [
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume1.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume2.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume3.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume4.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume5.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume6.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume7.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume8.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },

    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume9.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume10.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume11.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume12.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },

    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume13.jpg",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume14.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },
    {
      uid:"",
      nombre:"",
      tono:"",
      imagen:"./assets/imagenes/perfume15.webp",
      alt:"",
      precio:232,
      stock: 0
    
    },
  ]
}
}
