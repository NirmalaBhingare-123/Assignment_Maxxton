import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponentComponent } from "../employee-component/employee-component.component";

const routes: Routes = [
  { path: "employee", component: EmployeeComponentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
