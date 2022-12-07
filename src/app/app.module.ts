import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { appRoutes } from './routes';
import { AppComponent } from './app.component';;
import { NavBarComponent } from './nav/navBar.component';
import { BbcGrid } from './grid/tradegrid.component';
import { LimitComponent } from './limit/limitform.component';
import { ELK } from './elk/elk.component';

@NgModule({  
  imports: [
    BrowserModule,    
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    BbcGrid,
    LimitComponent,
    ELK
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }