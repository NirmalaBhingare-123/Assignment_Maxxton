import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "../employee-service.service";

@Component({
  selector: "app-employee-component",
  templateUrl: "./employee-component.component.html",
  styleUrls: ["./employee-component.component.css"]
})
export class EmployeeComponentComponent implements OnInit {
  candidateData = [];
  constructor(private employeeservice: EmployeeServiceService) {}

  ngOnInit() {
    this.candidateData = this.employeeservice.getData();
    this.sortByName();
  }

  /* Sort By Name */
  sortByName() {
    this.candidateData.sort((a, b) => a.name.localeCompare(b.name));
  }
}
