import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MaterialModule } from '../material.module';
import { TodoComponent } from './app.todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './app.todo.service';

@NgModule({
    declarations: [
        TodoComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    exports: [
        TodoComponent
    ],
    providers: [
        TodoService
    ]
  })
  export class TodoModule { }