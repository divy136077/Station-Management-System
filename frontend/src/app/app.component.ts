import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'station';
  constructor(private router: Router) {}


  pageOfItems!: Array<any>;
  items!: { id: number; name: string; }[];
  // router: any;

  logout(){
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('/login');
  }

  



  ngOnInit() {

    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
}

onChangePage(pageOfItems: Array<any>) {
   
    this.pageOfItems = pageOfItems;
}
}
