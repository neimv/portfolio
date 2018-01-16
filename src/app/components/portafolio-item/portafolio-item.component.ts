import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent {

  producto: any = undefined;
  cod: string = undefined;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductosService
  ) {
    route.params.subscribe(parametros => {
      prodService.cargarProducto(parametros['id']).subscribe(
        res => {
          this.cod = parametros['id'];
          this.producto = res.json();
        }
      );
    });
  }

}
