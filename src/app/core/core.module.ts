import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { API_BASE_URL } from './api/api-client';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { HashtagAnalyseComponent } from './components/hashtag-analyse/hashtag-analyse.component';


@NgModule({
  declarations: [
    RootLayoutComponent,
    NavbarComponent,
    ResultsComponent,
    HashtagAnalyseComponent
  ],
  exports: [
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
  ]
})
export class CoreModule {
}
