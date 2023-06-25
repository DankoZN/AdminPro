import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementatorComponent } from './incrementator/incrementator.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncrementatorComponent
  ],
  exports: [
    IncrementatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
