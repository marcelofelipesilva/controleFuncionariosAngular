import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroFuncionarioComponent } from './pages/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListarFuncionarioComponent } from './pages/Funcionario/listar-funcionario/listar-funcionario.component';
import { VisualizarFuncionarioComponent } from './pages/Funcionario/visualizar-funcionario/visualizar-funcionario.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'funcionarios',
    pathMatch: 'full'
},
{
  path: 'funcionarios',
  children: [
    {
      path: '',
      component: ListarFuncionarioComponent
    },
    {
      path: 'cadastro',
      children: [
        {
          path: '',
          component: CadastroFuncionarioComponent
        },
        {
          path: ':id',
          component: CadastroFuncionarioComponent
        }
      ]
    },
    {
      path: ':id',
      component: VisualizarFuncionarioComponent,
      pathMatch: 'full'
    }
  ]
},
{ path: '**', redirectTo: 'Funcionarios' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
