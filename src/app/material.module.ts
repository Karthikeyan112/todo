import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
    ],
    imports: [
      MatInputModule,
      MatFormFieldModule,
      MatCardModule,
      MatButtonModule,
      MatGridListModule,
      MatListModule,
      MatCheckboxModule
    ],
    exports: [
      MatInputModule,
      MatFormFieldModule,
      MatCardModule,
      MatButtonModule,
      MatGridListModule,
      MatListModule,
      MatCheckboxModule
    ],
    providers: [],
    bootstrap: []
  })
  export class MaterialModule { }