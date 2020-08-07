import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramFilterComponent } from './components/program-filter/program-filter.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramComponent } from './components/program/program.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProgramFilterComponent,
    ProgramListComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    RadioButtonModule,
    PanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
