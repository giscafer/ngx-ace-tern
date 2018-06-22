import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class AceEditorDirective implements OnInit {
    private elementRef;
    _text: string;
    _mode: string;
    _theme: string;
    _readOnly: boolean;
    _roptionseadOnly: boolean;
    editor: any;
    oldVal: any;
    textChanged: EventEmitter<any>;
    editorRef: EventEmitter<any>;
    options: any;
    readOnly: boolean;
    theme: string;
    mode: string;
    text: string;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
