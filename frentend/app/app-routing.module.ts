import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';

import { DeleteComponent } from './delete/delete.component';
import { UpdataComponent } from './updata/updata.component';
import { InsertComponent } from './insert/insert.component';
const routes: Routes = [
  {path:"view",component:ViewComponent},
  {path:"insert",component:InsertComponent},
  {path:"update",component:UpdataComponent},
  {path:"delete",component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
