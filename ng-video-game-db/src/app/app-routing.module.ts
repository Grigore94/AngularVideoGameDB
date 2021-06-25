import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "search/game-search",
    component: HomeComponent,
  },
  {
    path: "services/:id",
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
eximport { DetailsComponent } from './components/details/details.component';
ports: [RouterModule]
})
export class AppRoutingModule { }
