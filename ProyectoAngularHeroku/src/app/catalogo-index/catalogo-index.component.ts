import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../services/catalogo.service';
@Component({
  selector: 'app-catalogo-index',
  templateUrl: './catalogo-index.component.html',
  styleUrls: ['./catalogo-index.component.css']
})
export class CatalogoIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.catalogoService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.catalogoService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
