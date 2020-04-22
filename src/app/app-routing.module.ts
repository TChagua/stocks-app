import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ManageComponent } from './manage/manage.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ManageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
