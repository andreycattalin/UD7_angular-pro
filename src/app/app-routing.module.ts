import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGatosComponent } from './page-gatos/page-gatos.component';
import { PageMoviesComponent } from './page-movies/page-movies.component';

const routes: Routes = [
  { path: '', component: PageGatosComponent, pathMatch: "full" },
  { path: 'movies', component: PageMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
