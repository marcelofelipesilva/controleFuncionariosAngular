import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigParamsService } from './config-params.service';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient,
    private configService: ConfigParamsService) { }
}
