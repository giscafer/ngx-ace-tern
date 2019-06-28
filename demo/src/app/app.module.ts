import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AceEditorModule } from 'ngx-ace-tern';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AceEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
