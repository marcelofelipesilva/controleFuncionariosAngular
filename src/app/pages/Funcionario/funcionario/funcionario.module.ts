import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroFuncionarioComponent } from './../cadastro-funcionario/cadastro-funcionario.component';
import { ListarFuncionarioComponent } from './../listar-funcionario/listar-funcionario.component';
import { VisualizarFuncionarioComponent } from './../visualizar-funcionario/visualizar-funcionario.component';

@NgModule({
  declarations: [
    CadastroFuncionarioComponent,
    ListarFuncionarioComponent,
    VisualizarFuncionarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FuncionarioModule { }
