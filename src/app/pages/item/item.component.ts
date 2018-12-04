import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoItem } from '../../interfaces/producto-item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : productoItem;
  id: string;

  constructor(private route: ActivatedRoute, 
       public productoItem: ProductosService ) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros =>{
      this.productoItem.getProducto(parametros['id'])
      .subscribe((producto: productoItem) =>{
        this.producto = producto;
        this.id = parametros['id'];
        
      });
    });
  }

}
