import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'equipo',
    component: EquipoComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
  /*
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' }
  */
  /*
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'home-page',
        loadChildren: './pages/home-page/homePage.module#HomePageModule',
        canActivate: [LoginGuard]
      },
      {
        path: 'catalogos',
        loadChildren: './pages/catalogo/catalogo.module#CatalogoModule',
        canActivate: [LoginGuard]
      }
    ]
  }, 
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'lock',
      component: LockComponent
    }]
  },
  {
    path: 'estandar',
    component: EstandarComponent,
    canActivate: [LoginGuard]
  }, { path: '**', redirectTo: 'login' }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
