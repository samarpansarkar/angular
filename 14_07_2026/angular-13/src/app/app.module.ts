import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { TowWayDataBindingComponent } from './components/tow-way-data-binding/tow-way-data-binding.component';
import { NgIfDirectiveComponent } from './components/Directives/StructuralDirectives/ng-if-directive/ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TowWayDataBindingComponent,
    NgIfDirectiveComponent
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
