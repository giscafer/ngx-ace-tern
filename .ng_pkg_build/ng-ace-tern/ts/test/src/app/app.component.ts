import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <ul>
      <li>1、支持语法检测</li>
      <li>2、支持属性提示自动输入</li>
      <li>3、支持快捷键，类似vim或sublime，如Ctrl+Shit+D快速复制一行，Ctrl+D 快速删除一行</li>
    </ul>
    <br>
    <div #editor id="code-panel" ace-editor [text]="code" [mode]="'javascript'" [theme]="'chrome'" [options]="aceOptions" [readOnly]="false"
    (textChanged)="onAceChange($event)" (editorRef)="editorRef($event)" style="display:block; height: 80vh; width:100%"></div>
  `,
  styles: [`

  `]
})
export class AppComponent implements OnInit {

  code = '';
  aceOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  };

  acEditor: any;

  constructor() { }

  ngOnInit() {
    this.code = require('!!raw-loader!./test-code.js');
  }

  onAceChange(data) {
    console.log('~~~编辑器内容变化~~~');
  }

  editorRef($event) {
    this.acEditor = $event;
  }
}
