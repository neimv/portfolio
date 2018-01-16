import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargando_productos: boolean = true;

  constructor(
    private http: Http
  ) {
    this.cargar_productos();
  }

  public cargar_productos() {
    if (this.productos.length === 0) {
      this.http.get('https://paginaweb-8208e.firebaseio.com/productos_idx.json').subscribe(
        res => {
          this.cargando_productos = false;
          this.productos = res.json();
        }
      );
    }
  }

  public cargarProducto(cod: string) {
    return this.http.get(`https://paginaweb-8208e.firebaseio.com/productos/${ cod }.json`);
  }
}
