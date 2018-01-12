import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class InformacionService {
  info: any = {};
  equipo: any = [];
  cargada: boolean = false;
  cargadaSobre: boolean = false;

  constructor(
    public http: Http
  ) {
    this.cargaInfo();
    this.cargaSobreNosotros();
  }

  cargaInfo() {
    this.http.get('assets/data/info.json').subscribe(
      data => {
        this.info = data.json();
        this.cargada = true;
      }
    );
  }

  cargaSobreNosotros() {
    this.http.get('https://paginaweb-8208e.firebaseio.com/equipo.json').subscribe(
      data => {
        this.equipo = data.json();
        this.cargadaSobre = true;
      }
    );
  }
}
