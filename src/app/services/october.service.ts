import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DesarrolloTema } from '../interfaces/DesarrolloTema.interface';
import { Temas } from '../interfaces/Temas.interface';

const URL = environment.url+'/api/v1';

@Injectable({
  providedIn: 'root'
})
export class OctoberService {

  constructor(private http:HttpClient) { }

  getTemas(){    
    return this.http.get<Temas[]>(`${URL}/apologetica-temas`);
  }
  getTema(tema:string){    
    return this.http.get<DesarrolloTema[]>(`${URL}/apologetica-tema/${tema}`);
  }

  
}
