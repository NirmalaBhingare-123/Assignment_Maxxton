import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "../employee-service.service";

@Component({
  selector: "app-employee-component",
  templateUrl: "./employee-component.component.html",
  styleUrls: ["./employee-component.component.css"]
})
export class EmployeeComponentComponent implements OnInit {
  candidate_data = [];
  constructor(private employeeservice: EmployeeServiceService) {}

  ngOnInit() {
    this.candidate_data = this.employeeservice.getData();
    console.log("hello....................");
    console.log("Candidatadataa.........", this.candidate_data);
  }
}
