import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent implements OnInit {
  public currentDate: string;
  public formGroup = new FormGroup({
    hashtag: new FormControl(''),
    searchDate: new FormControl(''),
    limit: new FormControl(''),
    language: new FormControl(''),
  });

  constructor() {
    this.currentDate = this.formatDate();
  }

  ngOnInit(): void {
  }


  private formatDate(): string {
    // tslint:disable-next-line:one-variable-per-declaration
    const currentDate = new Date();
    // tslint:disable-next-line:one-variable-per-declaration
    let month = '' + (currentDate.getMonth() + 1),
      day = '' + currentDate.getDate();
    const year = currentDate.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
