import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginacaoComponent } from '../paginacao.component';
@NgModule({
  declarations: [ PaginacaoComponent ],
  imports: [
    CommonModule
  ],
  bootstrap: [ PaginacaoComponent ],
  exports: [ PaginacaoComponent ]
})
export class PaginacaoModule { }
