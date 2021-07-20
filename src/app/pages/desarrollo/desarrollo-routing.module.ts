import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarrolloPage } from './desarrollo.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarrolloPageRoutingModule {}
