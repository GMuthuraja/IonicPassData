import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router, private global: GlobalDataService) { }

  openDetailsWithQueryParams() {
    var productID = "12";
    //this.router.navigate(['product', { id: productID, name: "chalk" }]);
    this.router.navigate(['product/'+productID]);
  }

  openDetailsWithService() {
    this.global.setID("25");
    this.router.navigate(['product']);
  }

  openDetailsWithExtraState() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: "Simmon",
        email: "simmon@gmail.com"
      }
    };
    
    this.router.navigate(['product'], navigationExtras);
  }

}
