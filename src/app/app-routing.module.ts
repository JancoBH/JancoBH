import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {PortafoliosComponent} from './components/portafolios/portafolios.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {TutorialComponent} from './components/tutorial/tutorial.component';
import {ComunidadComponent} from './components/comunidad/comunidad.component';
import {TutorialDetailComponent} from './components/tutorial/tutorial-detail/tutorial-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: 'tutorial/:id', component: TutorialDetailComponent},
  {path: 'portfolio', component: PortafoliosComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'contact', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
