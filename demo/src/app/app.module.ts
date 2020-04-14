import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AceEditorModule } from 'ngx-ace-tern';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AceEditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
