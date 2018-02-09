# ng-ace-tern

[![npm package](https://img.shields.io/npm/v/ng-ace-tern.svg)](https://www.npmjs.org/package/ng-ace-tern)

Tern plugin for Ace Editor, suport angular2\angular4\agnular5. 

[Online Demo](http://giscafer.github.io/ng-ace-tern/)


default options

```
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
```

default mode: `javascript`

default theme: `chrome`


# Install

`npm i ng-ace-tern`



## Sample Usage

add scripts `ace-builds` in your `index.html` or `angular-cli.json`

eg: 

```html
    <script src="./assets/ace-builds/src-noconflict/ace.js"></script>
```



```ts
import { Component } from '@angular/core';

import { AceEditorDirective } from 'ng-ace-tern';

@Component({
  directives: [AceEditorDirective],
  template: `
  <div ace-editor
       [text]="text"
       [mode]="'sql'"
       [theme]="'clouds'"
       [options]="options"
       [readOnly]="false"
       (textChanged)="onChange($event)"
       style="display:block; height: 80vh; width:100%"></div>
  `
})
export class MyComponent {
  constructor() {
    this.text = 'test';
    this.options = { printMargin: false };
    this.onChange = (data) => {
      console.log(data);
    }
  }
}
```
Important pieces to note in the HTML template: `[ace-editor]` attribute, `[text]`, `[theme]`, `[mode]`, `[readOnly]`, `[options]` inputs, `(textChanged)` ,`(editorRef)` output. As per Ace, you must also make it a `display: block;` and give it a width and height.


## Related

- [ng-ace](https://github.com/giscafer/ng-ace)
- [Ace.Tern](https://github.com/sevin7676/Ace.Tern)

# License 

MIT

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Twitter [@nickbinglao](https://twitter.com/nickbinglao) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing_Lao](https://weibo.com/laohoubin)