import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesarrolloTema } from 'src/app/interfaces/DesarrolloTema.interface';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.page.html',
  styleUrls: ['./desarrollo.page.scss'],
})
export class DesarrolloPage implements OnInit {
  desarrollo:DesarrolloTema[]=[];

  constructor(private activatedRoute: ActivatedRoute, private october:OctoberService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(resp=>{
      this.october.getTema(resp['tema']).subscribe(temas=>{
        this.desarrollo = temas;
      })
    });
  }

}
