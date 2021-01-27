import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiClient, MakeSentimentAnalyseCommand } from '../../api/api-client';

@Component({
  selector: 'app-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent implements OnInit {
  public currentDate: string;
  public formGroup = new FormGroup({
    hashtag: new FormControl('', [Validators.required]),
    fromDate: new FormControl('', [Validators.required]),
    limit: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
  });

  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.currentDate = this.formatDate();
    this.apiClient = apiClient;
  }

  ngOnInit(): void {
  }

  public sendRequest(): void {
    const formData = this.formGroup.getRawValue();
    const payload: MakeSentimentAnalyseCommand = new MakeSentimentAnalyseCommand(formData.hashtag, Number(formData.limit), formData.fromDate, formData.language);
    this.apiClient.MakeSentimentAnalyse(payload).subscribe((response) => {
      console.log(response);
    });
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
