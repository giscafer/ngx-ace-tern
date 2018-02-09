# ng-ace-tern

[![npm package](https://img.shields.io/npm/v/ng-ace-tern.svg)](https://www.npmjs.org/package/ng-ace-tern)

Tern plugin for Ace Editor, suport angular2\angular4\agnular5. 

[Online Demo](http://giscafer.github.io/ng-ace-tern)


default options

```
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
```

default mode: `javascript`

default theme: `chrome`


# Install

`npm i ng-ace`

# Sample Usage

```ts
import { Component } from '@angular/core';

import { AceEditorDirective } from 'ng-ace-tern';

import 'brace/theme/clouds';
import 'brace/mode/sql';

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

[ng-ace](https://github.com/giscafer/ng-ace)

# License 

MIT
