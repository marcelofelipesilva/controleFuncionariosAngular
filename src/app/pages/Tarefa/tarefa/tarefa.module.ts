import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastroTarefaComponent } from './../cadastro-tarefa/cadastro-tarefa.component';
import { ListarTarefaComponent } from './../listar-tarefa/listar-tarefa.component';
import { VisualizarTarefaComponent } from './../visualizar-tarefa/visualizar-tarefa.component';
@NgModule({
  declarations: [
    CadastroTarefaComponent,
    VisualizarTarefaComponent,
    ListarTarefaComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CadastroTarefaComponent,
    VisualizarTarefaComponent,
    ListarTarefaComponent

  ],
})
export class TarefaModule { }
