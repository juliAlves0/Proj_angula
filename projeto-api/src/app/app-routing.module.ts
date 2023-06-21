import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PainelComponent } from './painel/painel.component';
PainelComponent
HomeComponent
LoginComponent

const routes: Routes = [{path: '', component: PainelComponent},
{path: 'login', component: LoginComponent},
{path: 'painel', component: PainelComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
