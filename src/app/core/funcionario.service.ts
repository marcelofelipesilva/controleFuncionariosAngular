import { Funcionario } from './../shared/models/funcionario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigParamsService } from './config-params.service';
import { Observable } from 'rxjs';

const url='http://localhost:4200/funcionarios/'
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient,
    private configService: ConfigParamsService) { }

    salvar(Funcionario:any):Observable<any>{
      return this.http.post(url,Funcionario)
    }


    
}
