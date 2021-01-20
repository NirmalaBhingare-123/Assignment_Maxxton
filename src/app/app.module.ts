import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponentComponent } from "./employee-component/employee-component.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { EmployeeServiceService } from "./employee-service.service";
import { DatePipe } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, EmployeeComponentComponent],
  providers: [EmployeeServiceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
