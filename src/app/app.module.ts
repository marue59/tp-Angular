import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './component/carte-visite/carte-visite.component';
import { ShowDateComponent } from './component/show-date/show-date.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteVisiteComponent,
    ShowDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
