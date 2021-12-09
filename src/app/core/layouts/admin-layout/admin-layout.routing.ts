import { Routes } from "@angular/router";

import { DashboardComponent } from "../../../pages/dashboard/dashboard.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: 'prestadores', loadChildren: () => import('../../../pages/prestadores/prestadores.module').then(m => m.PrestadoresModule) },
  { path: 'conveniados', loadChildren: () => import('../../../pages/conveniados/conveniados.module').then(m => m.ConveniadosModule) },
  { path: 'associados', loadChildren: () => import('../../../pages/associados/associados.module').then(m => m.AssociadosModule) },

];
