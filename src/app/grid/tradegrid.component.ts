import { Component, Input, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'clhgrid',
    template: `
        <ag-grid-angular 
            style="width: 100%; height: 500px;" 
            class="ag-theme-balham" 
            [rowData]="rowData" 
            [columnDefs]="columnDefs" 
            rowSelection="multiple">
        </ag-grid-angular>
    `
})
export class BbcGrid {
    title = 'app';
    @Input() event5: any
    rowData: any;
    
    constructor(private http: HttpClient) { }

    columnDefs = [
        { headerName: 'Make', field: 'make', sortable: true, checkboxSelection: true },
        { headerName: 'Model', field: 'model', filter: true },
        { headerName: 'Price', field: 'price' }
    ];

    ngOnInit() {
        //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
        if(this.event5 == 'Personal') {
            this.rowData = [
                { make: 'Blah', model: this.event5, price: 35000 },
                { make: 'Need to get the data from a server', model: 'Mondeo', price: 32000 },
                { make: 'Is select all possible?', model: 'Boxter', price: 72000 }
            ];
        }
        else {
            this.rowData = [
                { make: 'Toyota', model: this.event5, price: 35000 },
                { make: 'Ford', model: 'Mondeo', price: 32000 },
                { make: 'Porsche', model: 'Boxter', price: 72000 },
                { make: 'TATA', model: 'Indica', price: 10000 }
            ];
        }
    }

}
