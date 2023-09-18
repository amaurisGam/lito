
import { Component } from '@angular/core';

declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
  
export class Tab3Page {


  constructor() {

      //Use the ZohoSalesIQ.showLauncher API if you wish to show the launcher by default.
      ZohoSalesIQ.showLauncher(true);   
  }
  

}
