import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from './../../../material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule]
})
export class ToolbarModule { }
