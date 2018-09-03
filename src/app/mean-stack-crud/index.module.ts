import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeanStackCrudComponent } from './mean-stack-crud.component';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [{
    path: "",
    component: MeanStackCrudComponent,
    children: [
        {
            path: "",
            loadChildren: './list-employee/index.module#ListEmployeeModule'
        },
        {
            path: "create",
            loadChildren: './add-employee/index.module#AddEmployeeModule'
        },
        {
            path: "edit/:id",
            loadChildren: './edit-employee/index.module#EditEmployeeModule'
        }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [
        MeanStackCrudComponent
    ]
})
export class MeanStackModule { }

