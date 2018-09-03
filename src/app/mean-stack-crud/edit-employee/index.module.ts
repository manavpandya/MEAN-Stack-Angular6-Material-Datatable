import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee.component';
// import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule, MatButton, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [{
    path: "", 
    component: EditEmployeeComponent,
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
        // MatTableModule,
        // MatPaginatorModule,
        MatInputModule
    ],
    exports: [
        // MatCardModule,
        // MatToolbarModule,
        MatButtonModule,
        // MatMenuModule,
        MatFormFieldModule,
        // MatTableModule,
        // MatPaginatorModule,
        MatInputModule
    ],
    declarations: [
        EditEmployeeComponent
    ]
})
export class EditEmployeeModule {}

