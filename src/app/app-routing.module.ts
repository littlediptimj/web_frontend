import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
},  
{
    path:'home',
    component:HomeComponent,
    children:[
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
          path:'employee',
          component:EmployeeComponent
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
