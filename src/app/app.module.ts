import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFuncionarioComponent } from './pages/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListarFuncionarioComponent } from './pages/Funcionario/listar-funcionario/listar-funcionario.component';
import { CadastroTarefaComponent } from './pages/Tarefa/cadastro-tarefa/cadastro-tarefa.component';
import { ListarTarefaComponent } from './pages/Tarefa/listar-tarefa/listar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionarioComponent,
    ListarFuncionarioComponent,
    CadastroTarefaComponent,
    ListarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
