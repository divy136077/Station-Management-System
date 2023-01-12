import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pagination-module',
  templateUrl: './pagination-module.component.html',
  styleUrls: ['./pagination-module.component.css']
})


export class PaginationModuleComponent {
  @Input() totalRecords: any;
  @Output() setPageNumber: EventEmitter<any> = new EventEmitter();
  @Input() pageNumber: any ;
  @Input() pageSize: any ;

  totalPages: any;

  ngOnInit() {
    //  this.setPageNumber(50); 
    // console.log("pg", this.totalRecords, this.pageSize)
    // console.log(this.pageNumber);
    
  }
  
  

  ngOnChanges() {
    if (this.totalRecords && this.pageSize) {
      this.totalPages = new Array(Math.ceil(parseInt(this.totalRecords) / parseInt(this.pageSize)))
      
    }
    // console.log("pg1",this.totalPages , this.pageNumber)
    // this.totalPages = Math.ceil(parseInt(this.totalRecords) / parseInt(this.pageSize))
  }

  onPageChange(pageNumber: any, nextPage?: any) {
    if (nextPage == undefined) {
      this.setPageNumber.emit(pageNumber)
    } else if (nextPage) {
      this.setPageNumber.emit(parseInt(pageNumber) + 1)
    } else if (!nextPage){
      this.setPageNumber.emit(parseInt(pageNumber) - 1)
    }
  }
}

