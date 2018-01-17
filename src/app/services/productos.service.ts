import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  productos_filtrados: any[] = [];
  cargando_productos = true;

  constructor(
    private http: Http
  ) {
    this.cargar_productos();
  }

  public buscar_producto(termino: string) {

    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // termino la carga
        this.filtrar_poductos(termino);
      });
    } else {
      this.filtrar_poductos(termino);
    }
  }

  private filtrar_poductos(termino: string) {
    this.productos_filtrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod);
      }
    });
  }

  public cargar_productos() {
    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://paginaweb-8208e.firebaseio.com/productos_idx.json').subscribe(
        res => {
          this.cargando_productos = false;
          this.productos = res.json();
          resolve();
        }
      );
    });

    return promesa;
  }

  public cargarProducto(cod: string) {
    return this.http.get(`https://paginaweb-8208e.firebaseio.com/productos/${ cod }.json`);
  }
}
