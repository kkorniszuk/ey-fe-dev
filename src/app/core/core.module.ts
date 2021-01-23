import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    RootLayoutComponent,
    NavbarComponent
  ],
  exports: [
    RootLayoutComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule {
}
