import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './list-employee.component';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule, MatFormFieldModule, MatInputModule , MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [{
    path: "", 
    component: ListEmployeeComponent,
}];

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        RouterModule.forChild(routes),
        // MatCardModule,
        // MatToolbarModule,
        MatButtonModule,
        // MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule
    ],
    exports: [
        // MatCardModule,
        // MatToolbarModule,
        MatButtonModule,
        // MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule
    ],
    declarations: [
        ListEmployeeComponent
    ]
})
export class ListEmployeeModule {}

