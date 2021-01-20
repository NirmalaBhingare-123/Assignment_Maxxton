import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import moment from "moment";
import { EmployeeServiceService } from "../employee-service.service";

@Component({
  selector: "app-employee-component",
  templateUrl: "./employee-component.component.html",
  styleUrls: ["./employee-component.component.css"]
})
export class EmployeeComponentComponent implements OnInit {
  candidateData = [];
  name: string;
  distinctArray = [];
  expMoreTwoArray = [];
  countDistinctArray: number;
  removeCandidataArray = [];
  currentDate: any;
  constructor(
    private employeeservice: EmployeeServiceService,
    private datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.currentDate = new Date();
    this.currentDate = this.datepipe.transform(this.currentDate, "dd/MM/yyyy");
    this.candidateData = this.employeeservice.getData();
    this.sortByName();
    this.getDistinctDepartmentCount();
    this.removeCandidate();
  }

  /* Sort By Name */
  sortByName() {
    this.candidateData.sort((a, b) => a.name.localeCompare(b.name));
  }

  /*Search By Name */
  searchByName() {
    if (this.name != "") {
      this.candidateData = this.candidateData.filter(res => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }

  /* Get distinct departments and count of candidates in each.*/
  getDistinctDepartmentCount() {
    this.distinctArray = this.candidateData
      .map(item => item.department)
      .filter(
        (value, index, categoryArray) => categoryArray.indexOf(value) === index
      );
    this.countDistinctArray = this.distinctArray.length;
  }

  /* Remove all candidates from  Development department. */
  removeCandidate() {
    this.removeCandidataArray = this.candidateData.filter(
      data => data.department !== "Development"
    );
  }
}
