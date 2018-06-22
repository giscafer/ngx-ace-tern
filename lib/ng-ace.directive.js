import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { initTern } from './tern';
var AceEditorDirective = /** @class */ (function () {
    function AceEditorDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.textChanged = new EventEmitter();
        this.editorRef = new EventEmitter();
        var el = elementRef.nativeElement;
        el.classList.add('editor');
        this.editor = window.ace.edit(el);
        setTimeout(function () {
            _this.editorRef.emit(_this.editor);
        });
        this.editor.on('change', function () {
            var newVal = _this.editor.getValue();
            if (newVal === _this.oldVal)
                return;
            if (typeof _this.oldVal !== 'undefined') {
                _this.textChanged.emit(newVal);
            }
            _this.oldVal = newVal;
        });
    }
    Object.defineProperty(AceEditorDirective.prototype, "options", {
        set: function (value) {
            this.editor.setOptions(value || {
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
        set: function (value) {
            this._readOnly = value;
            this.editor.setReadOnly(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "theme", {
        set: function (value) {
            this._theme = value || 'chrome';
            ;
            this.editor.setTheme("ace/theme/" + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "mode", {
        set: function (value) {
            this._mode = value || 'javascript';
            this.editor.getSession().setMode("ace/mode/" + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "text", {
        set: function (value) {
            if (value === this.oldVal)
                return;
            this.editor.setValue(value);
            this.editor.clearSelection();
            this.editor.focus();
        },
        enumerable: true,
        configurable: true
    });
    AceEditorDirective.prototype.ngOnInit = function () {
        initTern(this.editor);
    };
    AceEditorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ace-editor]'
                },] },
    ];
    /** @nocollapse */
    AceEditorDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AceEditorDirective.propDecorators = {
        textChanged: [{ type: Output }],
        editorRef: [{ type: Output }],
        options: [{ type: Input }],
        readOnly: [{ type: Input }],
        theme: [{ type: Input }],
        mode: [{ type: Input }],
        text: [{ type: Input }]
    };
    return AceEditorDirective;
}());
export { AceEditorDirective };
