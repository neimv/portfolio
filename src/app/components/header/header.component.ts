import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  constructor(
    public infoSer: InformacionService,
    private router: Router
  ) {
  }

  buscar_producto(termino: string) {
    this.router.navigate(['buscar', termino]);
  }
}
