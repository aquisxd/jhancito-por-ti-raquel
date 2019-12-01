import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from '../services/imagen.service';
@Component({
  selector: 'app-imagen-index',
  templateUrl: './imagen-index.component.html',
  styleUrls: ['./imagen-index.component.css']
})
export class ImagenIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.imagenService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.imagenService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
