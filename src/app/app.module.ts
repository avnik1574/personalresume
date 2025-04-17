import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ✅ Import the module, not the component
import { PersonalModule } from './personal/personal.module';

@NgModule({
  declarations: [
    AppComponent // ✅ Only AppComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PersonalModule // ✅ Use the module that declares PersonalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
