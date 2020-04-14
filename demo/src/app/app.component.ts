import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  code = '';
  aceOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
  };
  mode = 'javascript';

  acEditor: any;

  constructor() {}

  ngOnInit() {
    this.code = require('!!raw-loader!./test-code.js');
  }

  onAceChange(data) {
    console.log('~~~编辑器内容变化~~~');
  }

  editorRef($event) {
    this.acEditor = $event;
  }

  modeChnage($event) {
    this.mode = $event;
  }
}
