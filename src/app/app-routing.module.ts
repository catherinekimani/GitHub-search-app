import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "repos", component: ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
