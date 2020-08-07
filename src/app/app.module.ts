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
    CardModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
