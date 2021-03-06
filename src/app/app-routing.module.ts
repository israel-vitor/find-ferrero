import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SuccessComponent } from './dialogs/success/success.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';


const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
