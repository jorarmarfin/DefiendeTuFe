import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Temas } from 'src/app/interfaces/Temas.interface';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  temas:Temas[]=[];

  constructor(private october:OctoberService, private router:Router) { }

  ngOnInit() {
    this.october.getTemas().subscribe(resp=>{
      this.temas = resp;
    });
  }
  verTema(tema:string){
    this.router.navigate(['desarrollo',tema]);

  }

}
