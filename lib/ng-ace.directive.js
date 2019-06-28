var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { initTern } from './tern';
var AceEditorDirective = /** @class */ (function () {
    function AceEditorDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.textChanged = new EventEmitter();
        this.editorRef = new EventEmitter();
        var el = this.elementRef.nativeElement;
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
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AceEditorDirective.prototype, "editorRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "options", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AceEditorDirective.prototype, "readOnly", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AceEditorDirective.prototype, "theme", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AceEditorDirective.prototype, "mode", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], AceEditorDirective.prototype, "text", null);
    AceEditorDirective = __decorate([
        Directive({
            selector: '[ace-editor]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], AceEditorDirective);
    return AceEditorDirective;
}());
export { AceEditorDirective };
