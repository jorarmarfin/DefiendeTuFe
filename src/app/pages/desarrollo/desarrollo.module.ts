import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolloPageRoutingModule } from './desarrollo-routing.module';

import { DesarrolloPage } from './desarrollo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DesarrolloPage]
})
export class DesarrolloPageModule {}
