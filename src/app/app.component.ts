// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {

// }

app.component.html

<div >
  
  <div class = "header">
    <nav-bar> </nav-bar>
  </div>

  <div class = "content">
    <mat-card>
      <mat-list>
        <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
          <mat-button-toggle> Cancel </mat-button-toggle>
          <mat-button-toggle> Save </mat-button-toggle>
        </mat-button-toggle-group>
      </mat-list>
    </mat-card> <br>
    <div> <my-box> </my-box> </div> <br> <br>
    <my-table class = "my-table"> </my-table> <br>
    <div class = "navTab">
      <mat-card>
        <mat-tab-group>
          <mat-tab label="Indents"> </mat-tab>
          <mat-tab label="documents"> </mat-tab>
          <mat-tab label="statistics"> </mat-tab>
        </mat-tab-group>
      </mat-card>
    </div>
    <br> <br>
    <layout> </layout>
    <!-- <router-outlet></router-outlet> -->
  </div>
  
  <div class = "sidebar">

  </div>


  <div class = "footer">

  </div>

</div>



app.scss

.header > h1 {
    text-align: center;
}

.content {
    background-color: #dddddd;
}

.content > mat-button-toggle {
  border-radius: 30px;
}

.my-table {
  width: 75%;
}





// #sidebar    {
//     position: absolute;
//     left: -200px;
//     width: 200px;
//     height: 400px;
//     background: red;    
// }

// #page-wrap  {
//     position: relative;
//     width: 600px;
//     background: #eee;
//     height: 400px;
//     margin: 0 auto;
// }



my-module.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';

//
// Form Controls
//

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

//
// Navigation
//

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

//
// Layout
//

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';

//
// Buttons & Indicators
//

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//
// Popups & Modals
//

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

//
// Data Table
//

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const modules: any[] = [

  LayoutModule,

  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,

  MatNativeDateModule,
  // MatMomentDateModule,

  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,

  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,

  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,

  MatPaginatorModule,
  MatSortModule,
  MatTableModule

];


@NgModule({
  declarations: [],
  imports: [ ...modules, CommonModule ],
  exports: [ ...modules ]
})
export class MyModuleModule {
  
 }



app.modules


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModuleModule } from './my-module.module'


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './table/table.component';
import { MyBoxComponent } from './my-box/my-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutComponent,
    TableComponent,
    MyBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





app.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Drag and Drop';
}


///////////////////////////////table

table.html

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->


  <ng-container matColumnDef="assignee">
    <th mat-header-cell *matHeaderCellDef> Assignee </th>
    <td mat-cell *matCellDef="let element"> {{element.assignee}} </td>
  </ng-container>

  <ng-container matColumnDef="docs">
    <th mat-header-cell *matHeaderCellDef> Docs </th>
    <td mat-cell *matCellDef="let element"> {{element.docs}} </td>
  </ng-container>

  <ng-container matColumnDef="sentences">
    <th mat-header-cell *matHeaderCellDef> Sentences </th>
    <td mat-cell *matCellDef="let element"> {{element.sentences}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    
</table>



.ts 



import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  assignee: string;
  docs: number;
  sentences: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { assignee: 'John Doe', docs: 6, sentences: 'H'},
  { assignee: 'Michelle R', docs: 4, sentences: 'He'},
  { assignee: 'Greg Stevert', docs: 2, sentences: 'Li'}
]

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['assignee', 'docs', 'sentences'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}


.scss

table {
    width: 300px;
    border-radius: 8px;
  }



///////////////////////////nav-background
nav-bar.html

<mat-sidenav-container class="sidenav-container">
  <mat-sidenav #drawer class="sidenav" fixedInViewport="true"
      [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
      [mode]="(isHandset$ | async) ? 'over' : 'side'"
      [opened]="!(isHandset$ | async)">
    <mat-nav-list>
      <a mat-list-item href="#"><mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon></a>
      <a mat-list-item href="#"><mat-icon aria-hidden="false" aria-label="Example info icon">info</mat-icon></a>
      <a mat-list-item href="#"><mat-icon aria-hidden="false" aria-label="Example flag icon">flag</mat-icon></a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <mat-toolbar color="primary">
      <button
        type="button"
        aria-label="Toggle sidenav"
        mat-icon-button
        (click)="drawer.toggle()">
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <span>dragDrop</span>
            <span class="example-fill-remaining-space"></span>
            <span class="align-center"></span>
            <span class="example-spacer"></span>
            
            <button mat-button>About</button>
            <button mat-button>Contact</button>
            <button mat-icon-button [matMenuTriggerFor]="menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-icon aria-hidden="false" aria-label="Example account icon">account_circle</mat-icon>
              <mat-menu #menu="matMenu">
                <button mat-menu-item>
                  <mat-icon>dialpad</mat-icon>
                  <span>Redial</span>
                </button>
                <button mat-menu-item disabled>
                  <mat-icon>voicemail</mat-icon>
                  <span>Check voicemail</span>
                </button>
                <button mat-menu-item>
                  <mat-icon>notifications_off</mat-icon>
                  <span>Disable alerts</span>
                </button>
              </mat-menu>
    </mat-toolbar>
    <!-- Add Content Here -->
  </mat-sidenav-content>
</mat-sidenav-container>




.ts 






import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}



.scss


.sidenav-container {
  height: 100%;
}

.sidenav {
  width: 60px;
}

.sidenav .mat-toolbar {
  background: inherit;
}

.mat-toolbar.mat-primary {
  position: sticky;
  top: 0;
  z-index: 1;
}



//////////my-box


my-box.html


<div class = "box">
  <div class="example-small-box mat-elevation-z4">
    <h4>18</h4>
    <p>Indents</p>
  </div>
  <div class="example-large-box mat-elevation-z4">
    <h4>256</h4>
    <p>Entities</p>
  </div>
  <div class="example-small-box mat-elevation-z4">
      <h4>12</h4>
      <p>Documents</p>
    </div>
    <div class="example-large-box mat-elevation-z4">
      <h4>232</h4>
      <p>Sentences Identified</p>
    </div>
</div>





.ts 


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.scss']
})
export class MyBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



.scss


.example-small-box, .example-large-box {
  align-items: center;
  justify-content: center;
  float:left;
  height: 100px;
  width: 25%;
}






////////////////////////////layout

layout.html


<mat-grid-list cols="4" rowHeight="100px">
    <mat-grid-tile
        *ngFor="let tile of tiles"
        [colspan]="tile.cols"
        [rowspan]="tile.rows"
        [style.background]="tile.color">
      {{tile.text}}
    </mat-grid-tile>
  </mat-grid-list>


  .ts 



  import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
} 

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}



no .scsssss