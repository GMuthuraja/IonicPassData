import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  productID: any;

  constructor(private activatedRoute: ActivatedRoute, private global: GlobalDataService,
    private router: Router) { }

  ngOnInit() {
    //Receiving from QueryParams
    this.activatedRoute.params.subscribe((param) => {
      if(param)
      this.productID = "QueryParams: " + param['id'];
    })

    //Receiving from Service
    var id = this.global.getID();
    if(id)
    this.productID = "Service: " + id;


    //Receiving from Extras
    if(this.router.getCurrentNavigation().extras.state)
    this.productID = "Extras: " + this.router.getCurrentNavigation().extras.state;
  }

}
