import { ProductosService } from '../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino: string = undefined;

  constructor(
    private route: ActivatedRoute,
    public prodService: ProductosService
  ) {
    route.params.subscribe(parametros => {
      this.termino = parametros['termino'];

      prodService.buscar_producto(this.termino);
    });
  }

  ngOnInit() {
  }

}
