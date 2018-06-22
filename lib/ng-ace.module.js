import { NgModule } from '@angular/core';
import { AceEditorDirective } from './ng-ace.directive';
export { AceEditorDirective };
var AceEditorModule = /** @class */ (function () {
    function AceEditorModule() {
    }
    AceEditorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AceEditorDirective
                    ],
                    exports: [
                        AceEditorDirective
                    ],
                    providers: []
                },] },
    ];
    return AceEditorModule;
}());
export { AceEditorModule };
