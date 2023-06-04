import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { EstadoCidadeModule } from './shared/components/estado-cidade/estado-cidade.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClienteModule } from './shared/components/cliente/cliente.module';
import { ProdutoModule } from './shared/components/produto/produto.module';
import { CommonModule } from '@angular/common';
import { NotasFiscaisComponent } from './pages/notas-fiscais/notas-fiscais.component';
import { NotaFiscalModule } from './shared/components/nota-fiscal/nota-fiscal.module';

const routes: Routes = [
  {
    path: 'pages/notas-fiscais',
    component: NotasFiscaisComponent,
    loadChildren: () => import('./shared/components/nota-fiscal/nota-fiscal.module').then(m => m.NotaFiscalModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/clientes',
    component: ClientesComponent,
    loadChildren: () => import('./shared/components/cliente/cliente.module').then(m => m.ClienteModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/produtos',
    component: ProdutosComponent,
    loadChildren: () => import('./shared/components/produto/produto.module').then(m => m.ProdutoModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/test-page',
    component: TestPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
    CommonModule,
    EstadoCidadeModule,
    ClienteModule,
    ProdutoModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    TestPageComponent,
    ClientesComponent,
    ProdutosComponent,
    NotasFiscaisComponent
  ]
})
export class AppRoutingModule { }
