import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddColorComponent } from './add-color/add-color.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { DeleteZoneComponent } from './delete-zone/delete-zone.component';
import { HomeComponent } from './home/home.component';
import { UpdateZoneComponent } from './update-zone/update-zone.component';

const routes: Routes = [
  {
    path: "color/addColor",
    component: AddColorComponent
  },
  {
    path: "zone/addZone",
    component: AddZoneComponent
  },
  {
    path: "zone/updateZone",
    component: UpdateZoneComponent
  },
  {
    path: "zone/deleteZone",
    component: DeleteZoneComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
