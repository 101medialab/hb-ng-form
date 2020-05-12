(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/platform-browser/animations'), require('@angular/material/autocomplete'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/datepicker'), require('@angular/material/expansion'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/radio'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('hb-ng-form', ['exports', 'reflect-metadata', '@angular/core', 'rxjs', '@angular/forms', '@angular/platform-browser/animations', '@angular/material/autocomplete', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/datepicker', '@angular/material/expansion', '@angular/material/input', '@angular/material/core', '@angular/material/radio', '@angular/material/select'], factory) :
    (global = global || self, factory(global['hb-ng-form'] = {}, null, global.ng.core, global.rxjs, global.ng.forms, global.ng.platformBrowser.animations, global.ng.material.autocomplete, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.datepicker, global.ng.material.expansion, global.ng.material.input, global.ng.material.core, global.ng.material.radio, global.ng.material.select));
}(this, (function (exports, reflectMetadata, core, rxjs, forms, animations, autocomplete, button, buttonToggle, card, checkbox, datepicker, expansion, input, core$1, radio, select) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var HbFormWidgetComponent = /** @class */ (function () {
        function HbFormWidgetComponent(resolver) {
            this.resolver = resolver;
        }
        HbFormWidgetComponent_1 = HbFormWidgetComponent;
        HbFormWidgetComponent.prototype.ngAfterViewInit = function () {
            if (!this.data.hide && this.data.useComponent) {
                var factory = this.resolver.resolveComponentFactory(this.data.useComponent);
                var ref = this.customBlock.createComponent(factory);
                ref.instance.templateObject = this.data;
                ref.instance.parentTemplateObject = this.parent;
                ref.changeDetectorRef.detectChanges();
            }
        };
        HbFormWidgetComponent.prototype.ngOnInit = function () {
            var data = this.data;
            var result = null;
            var resolved = null;
            var options = data.options;
            if (typeof options === 'function') {
                resolved = options(data.diContainer, this.data, this.parent);
            }
            else if (!(result instanceof rxjs.Observable)) {
                resolved = options;
            }
            result = resolved;
            if (!(resolved instanceof rxjs.Observable)) {
                result = new rxjs.Observable(function (o) {
                    o.next(resolved);
                    o.complete();
                });
            }
            this.resolvedOptions = result;
        };
        HbFormWidgetComponent.prototype.stringToBoolean = function (val) {
            return val === 'true';
        };
        HbFormWidgetComponent.prototype.updateParentValue = function ($event, option) {
            var target = $event.target ? $event.target : $event.source;
            var isChecked = target.checked;
            switch (this.data.renderType) {
                case 'checkbox':
                    var parentControls = this.parent.control.controls;
                    if (isChecked) {
                        this.parent.add();
                        parentControls[parentControls.length - 1].setValue(option.value);
                    }
                    else {
                        var i = 0;
                        for (; i < parentControls.length; i++) {
                            if (parentControls[i].value == option.value)
                                break;
                        }
                        this.parent.remove(i);
                    }
                    break;
                case 'radio':
                    if (isChecked)
                        this.data.control.patchValue(target.value);
                    break;
            }
        };
        HbFormWidgetComponent.prototype.typeof = function (input) {
            return typeof input;
        };
        HbFormWidgetComponent.prototype.slugifyString = function (input) {
            if (input in HbFormWidgetComponent_1.slugMap) {
                return HbFormWidgetComponent_1.slugMap[input];
            }
            return HbFormWidgetComponent_1.slugMap[input] = input
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        };
        var HbFormWidgetComponent_1;
        HbFormWidgetComponent.slugMap = [];
        HbFormWidgetComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        __decorate([
            core.ViewChild("customBlock", { read: core.ViewContainerRef, static: true }),
            __metadata("design:type", Object)
        ], HbFormWidgetComponent.prototype, "customBlock", void 0);
        HbFormWidgetComponent = HbFormWidgetComponent_1 = __decorate([
            core.Component({
                selector: 'hb-form-widget',
                template: "<div *ngIf=\"\n        data.control != undefined &&\n        (\n            data.groupType == undefined ||\n            parent.arrayType == 'enum'\n        ) &&\n        key != 'setValue' &&\n        (\n            data.hide == undefined ||\n            !data.hide\n        )\n    \"\n    [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n    class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-container *ngIf=\"!data.useComponent; else customBlock\">\n        <label *ngIf=\"data.label\" for=\"hb-form-widget_{{ key ? key : data.slug }}-input\">{{ data.label }}</label>\n\n        <ng-container *ngIf=\"parent?.arrayType !== 'enum'\">\n            <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n                <ng-container *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\"\n                     class=\"hb-form-widget-input-field\">\n                    <input [attr.id]=\"(key ? key : data.slug) + '-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value)\"\n                           [placeholder]=\"data.label !== undefined ? data.label : null\"\n                           [formControl]=\"data.control\" />\n                </ng-container>\n\n                <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n<!--                        Autocomplete is not well supported in hb-form-widget-->\n\n<!--                        <div *ngIf=\"data.autocomplete.renderType != 'custom'; else autocompleteCustomizeBlock\" -->\n<!--                             class=\"hb-form-widget-input-field autocomplete\">-->\n<!--                            <input [attr.id]=\"key ? key : data.slug + '-input'\"-->\n<!--                                   [type]=\"data.renderType ? data.renderType : 'text'\"-->\n<!--                                   (change)=\"data.control.patchValue($event.target.value)\"-->\n<!--                                   [placeholder]=\"data.label !== undefined ? data.label : data.option.name\"-->\n<!--                                   [formControl]=\"data.control\" />-->\n\n<!--                            <autocomplete #auto=\"matAutocomplete\">-->\n<!--                                <option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">-->\n<!--                                    <span>{{ option.label }}</span>-->\n<!--                                </option>-->\n<!--                            </autocomplete>-->\n\n<!--                            <span class=\"hints\" *ngIf=\"data?.hints\">-->\n<!--                                {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}-->\n<!--                            </span>-->\n<!--                        </div>-->\n                </ng-template>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.renderType == 'textarea'\">\n                <textarea rows=\"5\" [formControl]=\"data.control\"\n                          [attr.id]=\"key ? key : data.slug + '-input'\">\n                </textarea>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n            <ng-container *ngIf=\"data.renderType != 'select'; else selectBlock\">\n                <ng-container *ngFor=\"let option of resolvedOptions | async\">\n                    <label for=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\">{{ option.name }}</label>\n\n                    <ng-container *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\">\n                        <input type=\"radio\"\n                               id=\"hb-form-widget_{{ key ? key : data.slug }}-input__{{ slugifyString(option.name) }}\"\n                               class=\"example-radio-button\"\n                               [value]=\"option.value\"\n                               [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                               [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                               (change)=\"updateParentValue($event, option)\"\n                               [formControl]=\"data.control\"\n                        />\n                    </ng-container>\n\n                    <ng-template #checkBoxBlock>\n                        <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckBoxBlock\">\n                            <input type=\"checkbox\"\n                                   [value]=\"option.value\"\n                                   [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                                   (change)=\"updateParentValue($event, option)\"\n                                   [formControl]=\"data.control\"/>\n                        </ng-container>\n\n                        <ng-template #booleanCheckBoxBlock>\n                            <input type=\"checkbox\"\n                                   [checked]=\"data.control.value ? true : null\"\n                                   (change)=\"data.control.patchValue($event.target.checked)\"/>\n                        </ng-template>\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n\n            <ng-template #selectBlock>\n                <select *ngIf=\"data.renderType == 'select'\"\n                        [formControl]=\"data.control\"\n                        [attr.placeholder]=\"data.label != undefined ? data.label : null\"\n                >\n                    <option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </option>\n                </select>\n            </ng-template>\n        </ng-container>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n        </span>\n    </ng-container>\n\n    <ng-template #customBlock></ng-template>\n</div>\n",
                inputs: ['data', 'key', 'parent']
            }),
            __metadata("design:paramtypes", [core.ComponentFactoryResolver])
        ], HbFormWidgetComponent);
        return HbFormWidgetComponent;
    }());

    var HbFormArrayComponent = /** @class */ (function (_super) {
        __extends(HbFormArrayComponent, _super);
        function HbFormArrayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormArrayComponent = __decorate([
            core.Component({
                selector: 'hb-form-array',
                template: "<div [attr.id]=\"data.id\"\n     class=\"hb-form-array {{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}\"\n     *ngIf=\"\n         data.control != undefined &&\n         key != 'setValue' && (\n             data.hide == undefined ||\n             !data.hide\n         )\n     \"\n     [formGroup]=\"data.control\"\n     [ngClass]=\"{\n         'hb-form-with-hints' : data.hints\n     }\"\n>\n    <header>\n        <h2 *ngIf=\"!data.hideHeader\">{{ data.label }}</h2>\n\n        <ng-container *ngIf=\"data.childrenConfigName.length > 0\">\n            <ng-container *ngIf=\"!data.expandOptions; else expandedArrayPushOptions\">\n                <select class=\"hb-form-array-config-switch\"\n                        [(ngModel)]=\"data.useConfig\" [ngModelOptions]=\"{standalone: true}\">\n                    <option *ngFor=\"let configName of data.childrenConfigName; let i = index\" [value]=\"i\">\n                        {{ configName }}\n                    </option>\n                </select>\n\n                <button class=\"btn btn-default hb-form-add-btn\" type=\"button\" *ngIf=\"data.arrayType != 'enum'\" (click)=\"data.add()\">Add</button>\n            </ng-container>\n\n            <ng-template #expandedArrayPushOptions>\n                <button type=\"button\"\n                        class=\"btn btn-default hb-form-add-btn hb-form-add-btn-expanded-{{ i }}\"\n                        *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                        (click)=\"data.useConfig = i; data.add();\">\n                    &#x253C; {{ configName }}\n                </button>\n            </ng-template>\n        </ng-container>\n    </header>\n\n    <div [attr.id]=\"data.id ? (data.id + '_' + i) : null\"\n         class=\"hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}\"\n         *ngFor=\"let cell of (data.arrayType != 'enum' ? data.children : resolvedOptions | async); let i=index\">\n        <hb-form-widget *ngIf=\"data.arrayType == 'enum'\"\n                        [data]=\"cell\"\n                        [key]=\"i\"\n                        [parent]=\"data\"></hb-form-widget>\n\n        <ng-container *ngIf=\"data.arrayType != 'enum'\">\n            <div *ngFor=\"let each of cell.children | mapToIterable;\"\n                 class=\"panel panel-default hb-form-array-cell-attr_{{ each.key }}\">\n                <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                    <hb-form-widget *ngIf=\"each.val.groupType == undefined\"\n                                    [data]=\"each.val\"\n                                    [key]=\"i\"\n                                    [parent]=\"data\"></hb-form-widget>\n                    <hb-form-array *ngIf=\"each.val?.groupType == 'array'\"\n                                   [data]=\"each.val\"\n                                   [key]=\"each.key\"\n                                   [parent]=\"data\"></hb-form-array>\n                    <hb-form-object *ngIf=\"each.val?.groupType == 'object'\"\n                                    [data]=\"each.val\"\n                                    [key]=\"each.key\"\n                                    [parent]=\"data\"></hb-form-object>\n                </ng-container>\n            </div>\n        </ng-container>\n\n        <button class=\"btn btn-default hb-form-remove-btn\"\n                type=\"button\"\n                *ngIf=\"data.arrayType != 'enum'\"\n                (click)=\"data.remove(i)\">\n            &#x2715;\n        </button>\n    </div>\n\n    <div class=\"hints\" *ngIf=\"data?.hints\">\n        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n    </div>\n</div>\n",
                inputs: ['key', 'data', 'parent']
            })
        ], HbFormArrayComponent);
        return HbFormArrayComponent;
    }(HbFormWidgetComponent));

    var HbFormMatArrayComponent = /** @class */ (function (_super) {
        __extends(HbFormMatArrayComponent, _super);
        function HbFormMatArrayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormMatArrayComponent = __decorate([
            core.Component({
                selector: 'hb-mat-form-array',
                template: "<mat-card class=\"hb-form-array hb-array-type_{{ data.arrayType }} hb-form-array_{{ key }} {{ data?.html?.classAttr }}\"\n          [attr.id]=\"data.id\"\n          *ngIf=\"\n              data.control != undefined &&\n              key != 'setValue' && (\n                  data.hide == undefined ||\n                  !data.hide\n              )\n          \"\n          [formGroup]=\"data.control\"\n          [ngClass]=\"{\n              'hb-form-with-hints' : data.hints\n          }\">\n    <mat-card-header>\n        <mat-card-title *ngIf=\"!data.hideHeader\">\n            <h2 *ngIf=\"data.label != ''\">{{ data.label }}</h2>\n\n            <ng-container *ngIf=\"data.childrenConfigName.length > 0\">\n                <ng-container *ngIf=\"!data.expandOptions; else expandedArrayPushOptions\">\n                    <mat-form-field>\n                        <mat-select class=\"hb-form-array-config-switch\"\n                                    [(ngModel)]=\"data.useConfig\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                            <mat-option *ngFor=\"let configName of data.childrenConfigName; let i = index\" [value]=\"i\">\n                                {{ configName }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <button mat-raised-button\n                            type=\"button\"\n                            class=\"btn btn-default hb-form-add-btn\"\n                            *ngIf=\"data.arrayType != 'enum'\"\n                            (click)=\"data.add()\"\n                    >\n                        Add\n                    </button>\n                </ng-container>\n\n                <ng-template #expandedArrayPushOptions>\n                    <button mat-raised-button\n                            type=\"button\"\n                            *ngFor=\"let configName of data.childrenConfigName; let i = index\"\n                            (click)=\"data.useConfig = i; data.add();\">\n                        &#x253C; {{ configName }}\n                    </button>\n                </ng-template>\n            </ng-container>\n        </mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n        <div [attr.id]=\"data.id + '-' + i\"\n             class=\"hb-form-array-cell hb-form-array-cell_{{ cell?.flexibleObjectTypeName?.toLowerCase() }} {{ cell?.html?.classAttr }}\"\n             *ngFor=\"\n                 let cell of data.arrayType != 'enum' ?\n                     data.children : resolvedOptions | async\n                 ; let i=index\n             \">\n            <hb-mat-form-widget *ngIf=\"data.arrayType == 'enum'\" [data]=\"cell\" [key]=\"i\" [parent]=\"data\"></hb-mat-form-widget>\n\n            <ng-container *ngIf=\"data.arrayType != 'enum'\">\n                <div *ngFor=\"let each of cell.children | mapToIterable;\"\n                     class=\"hb-form-array-cell-attr_{{ each.key }}\">\n                    <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                        <hb-mat-form-widget *ngIf=\"each.val.groupType == undefined\" [data]=\"each.val\" [key]=\"i\" [parent]=\"data\">\n                        </hb-mat-form-widget>\n                        <hb-mat-form-array *ngIf=\"each.val?.groupType == 'array'\" [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\">\n                        </hb-mat-form-array>\n                        <hb-mat-form-object *ngIf=\"each.val?.groupType == 'object'\" [data]=\"each.val\" [key]=\"each.key\" [parent]=\"data\">\n                        </hb-mat-form-object>\n                    </ng-container>\n                </div>\n            </ng-container>\n\n            <button mat-mini-fab color=\"primary\" class=\"hb-form-remove-btn\" type=\"button\"\n                    *ngIf=\"data.arrayType != 'enum'\"\n                    (click)=\"data.remove(i)\">\n                &#x2715;\n            </button>\n        </div>\n\n        <strong class=\"mat-hint\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </strong>\n    </mat-card-content>\n</mat-card>\n",
                inputs: ['key', 'data', 'parent']
            })
        ], HbFormMatArrayComponent);
        return HbFormMatArrayComponent;
    }(HbFormArrayComponent));

    var HbFormObjectComponent = /** @class */ (function (_super) {
        __extends(HbFormObjectComponent, _super);
        function HbFormObjectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormObjectComponent = __decorate([
            core.Component({
                selector: 'hb-form-object',
                template: "<div *ngIf=\"\n        data.control != undefined &&\n        key != 'setValue' && (\n            data.hide == undefined ||\n            !data.hide\n        )\n    \"\n     [formGroup]=\"data.control\"\n     [ngClass]=\"{\n         'error': !data.control.valid,\n         'hb-form-with-hints' : data.hints\n     }\"\n     class=\"form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}\"\n>\n    <h2 *ngIf=\"typeof(data.label) == 'string' && data.label != '' && !data.hideHeader\">\n        {{ data.label }}\n    </h2>\n\n    <div class=\"hb-form-object-content\">\n        <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n            <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                <hb-form-widget\n                    *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-widget>\n                <hb-form-array\n                    *ngIf=\"each.val?.groupType == 'array'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [formArrayName]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-array>\n                <hb-form-object\n                    *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                    [data]=\"each.val\"\n                    [key]=\"each.key\"\n                    [parent]=\"data\"\n                ></hb-form-object>\n            </ng-container>\n        </div>\n\n        <span class=\"hints\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </span>\n    </div>\n</div>\n",
                inputs: ['id', 'key', 'data', 'parent']
            })
        ], HbFormObjectComponent);
        return HbFormObjectComponent;
    }(HbFormWidgetComponent));

    var HbFormMatObjectComponent = /** @class */ (function (_super) {
        __extends(HbFormMatObjectComponent, _super);
        function HbFormMatObjectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormMatObjectComponent = __decorate([
            core.Component({
                selector: 'hb-mat-form-object',
                template: "<mat-card *ngIf=\"\n    data.control != undefined &&\n    key != 'setValue' && (\n        data.hide == undefined ||\n        !data.hide\n    )\"\n          [formGroup]=\"data.control\"\n          [ngClass]=\"{\n        'error': !data.control.valid,\n        'hb-form-with-hints' : data.hints\n    }\"\n          class=\"form-object {{ data?.html?.classAttr }} hb-form-obj_{{ key }}\">\n    <mat-card-header *ngIf=\"typeof(data.label) == 'string' && data.label != '' && !data.hideHeader\">\n        <mat-card-title>\n            {{ data.label }}\n        </mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"hb-form-object-content\">\n        <div *ngFor=\"let each of data.children | mapToIterable\" class=\"hb-form-obj-attr_{{ each.key }}\">\n            <ng-container *ngIf=\"!each.hide && each.key != 'setValue'\">\n                <hb-mat-form-widget\n                        *ngIf=\"each.val.groupType == undefined && each.key != 'setValue'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-widget>\n                <hb-mat-form-array\n                        *ngIf=\"each.val?.groupType == 'array'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [formArrayName]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-array>\n                <hb-mat-form-object\n                        *ngIf=\"each.val?.groupType == 'object' && each.key != 'setValue'\"\n                        [data]=\"each.val\"\n                        [key]=\"each.key\"\n                        [parent]=\"data\">\n                </hb-mat-form-object>\n            </ng-container>\n        </div>\n        <strong class=\"mat-hint\" *ngIf=\"data?.hints\">\n            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer) : data.hints }}\n        </strong>\n    </mat-card-content>\n</mat-card>\n",
                inputs: ['id', 'key', 'data', 'parent']
            })
        ], HbFormMatObjectComponent);
        return HbFormMatObjectComponent;
    }(HbFormObjectComponent));

    var HbFormMatWidgetComponent = /** @class */ (function (_super) {
        __extends(HbFormMatWidgetComponent, _super);
        function HbFormMatWidgetComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormMatWidgetComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            if (this.parent.arrayType == 'enum' &&
                this.parent.control.value.indexOf(this.data.options[0].value) > -1) {
                this.data.control.setValue(this.data.options[0].value);
            }
        };
        HbFormMatWidgetComponent = __decorate([
            core.Component({
                selector: 'hb-mat-form-widget',
                template: "<div *ngIf=\"\n         data.control != undefined &&\n         (\n             data.groupType == undefined ||\n             parent.arrayType == 'enum'\n         ) &&\n         key != 'setValue' &&\n         (\n             data.hide == undefined ||\n             !data.hide\n         )\n     \"\n     [ngClass]=\"{\n         'error': !data.control.valid,\n         'hb-form-with-hints' : data.hints\n     }\"\n     class=\"expand-to-child hb-form-widget hb-form-widget_{{ key }} {{ data?.html?.classAttr }}\"\n>\n    <ng-template #customBlock></ng-template>\n\n    <ng-container *ngIf=\"\n        !data.useComponent &&\n        parent?.arrayType !== 'enum'\n    \">\n        <ng-container *ngIf=\"['select', 'radio', 'checkbox', 'textarea'].indexOf(data.renderType) === -1\">\n            <mat-form-field *ngIf=\"data.selectOptionsObservables == undefined; else autocompleteBlock\" class=\"hb-form-widget-input-field\">\n                <div class=\"form-field-prefix\"\n                     matPrefix\n                     *ngIf=\"data?.matExtra?.matPrefix\"\n                     [innerHtml]=\"data.matExtra.matPrefix\"\n                ></div>\n\n                <input matInput\n                       [attr.id]=\"(key ? key : data.slug) + '-input'\"\n                       [type]=\"data.renderType ? data.renderType : 'text'\"\n                       (change)=\"data.control.patchValue($event.target.value)\"\n                       [placeholder]=\"data.label !== undefined ? data.label : null\"\n                       [formControl]=\"data.control\" />\n\n                <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                    <strong>\n                        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                    </strong>\n                </mat-hint>\n\n                <div class=\"form-field-suffix\"\n                     matSuffix\n                     *ngIf=\"data?.matExtra?.matSuffix\"\n                     [innerHtml]=\"data.matExtra.matSuffix\"></div>\n            </mat-form-field>\n\n            <ng-template #autocompleteBlock [ngIf]=\"data.autocomplete != undefined\">\n                <mat-form-field *ngIf=\"data.autocomplete.renderType != 'custom';\">\n<!--                  else autocompleteCustomizeBlock-->\n                    <input matInput\n                           [attr.id]=\"key ? key : data.slug + '-input'\"\n                           [type]=\"data.renderType ? data.renderType : 'text'\"\n                           (change)=\"data.control.patchValue($event.target.value);\"\n                           placeholder=\"{{ data.label !== undefined ? data.label : data.option.name }}\"\n                           [formControl]=\"data.control\"\n                           [matAutocomplete]=\"auto\" />\n\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let option of data.selectOptionsObservables | async\" [value]=\"option.value\">\n                            <span>{{ option.label }}</span>\n                        </mat-option>\n                    </mat-autocomplete>\n\n                    <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                        <strong>\n                            {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                        </strong>\n                    </mat-hint>\n                </mat-form-field>\n            </ng-template>\n        </ng-container>\n\n        <mat-form-field *ngIf=\"data.renderType === 'textarea'\">\n            <textarea matInput rows=\"5\" [formControl]=\"data.control\"\n                      [placeholder]=\"data.label ? data.label : data.option.name\"\n                      [attr.id]=\"key ? key : data.slug + '-input'\">\n            </textarea>\n\n            <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                <strong>\n                    {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                </strong>\n            </mat-hint>\n        </mat-form-field>\n    </ng-container>\n\n    <ng-container *ngIf=\"!data.useComponent && ['radio', 'checkbox', 'select'].indexOf(data.renderType) > -1\">\n        <div *ngIf=\"data.renderType != 'select'; else selectBlock\">\n            <mat-radio-group *ngIf=\"data.renderType == 'radio'; else checkBoxBlock\" [formControl]=\"data.control\">\n                <mat-radio-button\n                    class=\"example-radio-button\"\n                    *ngFor=\"let option of data.options\"\n                    [value]=\"option.value\"\n                    [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                    [attr.name]=\"data.renderType == 'radio' ? (key ? key : data.slug) + '-input' : null\"\n                    (change)=\"updateParentValue($event, option)\"\n                >\n                    {{ option.name }}\n                </mat-radio-button>\n            </mat-radio-group>\n\n            <ng-template #checkBoxBlock>\n                <ng-container *ngIf=\"parent?.arrayType == 'enum'; else booleanCheckboxBlock\">\n                    <mat-checkbox\n                        *ngFor=\"let option of data.options\"\n                        [value]=\"option.value\"\n                        [checked]=\"data.control.value === option.value || option.id === data.control.value ? true : null\"\n                        (change)=\"updateParentValue($event, option)\"\n                        [formControl]=\"data.control\"\n                    >\n                        {{ option.name }}\n                    </mat-checkbox>\n                </ng-container>\n\n                <ng-template #booleanCheckboxBlock>\n                    <label>{{ data.label }}</label>\n                    <mat-checkbox [checked]=\"data.control.value ? true : null\"\n                                  (change)=\"data.control.patchValue($event.source.checked)\">\n                    </mat-checkbox>\n                </ng-template>\n            </ng-template>\n        </div>\n\n        <ng-template #selectBlock>\n            <mat-form-field>\n                <mat-select\n                    *ngIf=\"data.renderType == 'select'\"\n                    [formControl]=\"data.control\"\n                    [placeholder]=\"data.label != undefined ? data.label : null\"\n                >\n                    <mat-option *ngFor=\"let option of resolvedOptions | async\" [value]=\"option.value\">\n                        {{ option.name ? option.name : option.value }}\n                    </mat-option>\n                </mat-select>\n\n                <mat-hint align=\"start\" *ngIf=\"data?.hints\">\n                    <strong>\n                        {{ typeof(data.hints) == 'function' ? data.hints(data.diContainer, data, parent) : data.hints }}\n                    </strong>\n                </mat-hint>\n            </mat-form-field>\n        </ng-template>\n    </ng-container>\n</div>\n",
                inputs: ['data', 'key', 'parent']
            })
        ], HbFormMatWidgetComponent);
        return HbFormMatWidgetComponent;
    }(HbFormWidgetComponent));

    var TypeMeta = /** @class */ (function () {
        function TypeMeta(_type) {
            this._type = _type;
        }
        Object.defineProperty(TypeMeta.prototype, "type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        return TypeMeta;
    }());
    var PrimitiveTypeMeta = /** @class */ (function (_super) {
        __extends(PrimitiveTypeMeta, _super);
        function PrimitiveTypeMeta(_value) {
            var _this = _super.call(this, ([
                'string',
                'number',
                'boolean'
            ].indexOf(typeof _value) > -1 ? typeof _value : 'any')) || this;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(PrimitiveTypeMeta.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        return PrimitiveTypeMeta;
    }(TypeMeta));
    var NonPrimitiveTypeMeta = /** @class */ (function (_super) {
        __extends(NonPrimitiveTypeMeta, _super);
        function NonPrimitiveTypeMeta(type, _mapping, // All attributes should be type of ExtractorResultType
        _value) {
            if (_mapping === void 0) { _mapping = null; }
            if (_value === void 0) { _value = null; }
            var _this = _super.call(this, type) || this;
            _this._mapping = _mapping;
            _this._value = _value;
            return _this;
        }
        Object.defineProperty(NonPrimitiveTypeMeta.prototype, "mapping", {
            get: function () {
                return this._mapping;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NonPrimitiveTypeMeta.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        return NonPrimitiveTypeMeta;
    }(TypeMeta));
    var OnOATResolvedSymbol = 'OnOATResolved';
    function OnOATResolved(cb) {
        return Reflect.metadata(OnOATResolvedSymbol, cb);
    }
    var ObjectAttributeTypeExtractor = /** @class */ (function () {
        function ObjectAttributeTypeExtractor() {
        }
        ObjectAttributeTypeExtractor.generateMapping = function (input, options) {
            if (options === void 0) { options = {}; }
            options = Object.assign({
                keyNamingStrategy: 'camelCase',
                stripUnderscore: false
            }, options);
            var mapping = {};
            var result = null;
            // input is an array, analyze the first cell only
            if (input instanceof Array) {
                mapping = new NonPrimitiveTypeMeta('array', Extractor.generateMapping(input[0], options));
            }
            else {
                // Analyze attributes inside input object
                for (var key in input) {
                    if (typeof input[key] !== 'function') {
                        var resolvedMeta = {};
                        // Array or Object
                        if (typeof input[key] === 'object') {
                            resolvedMeta = Extractor.generateObjectTypeMapping(input, key, options);
                            // Any primitive type
                        }
                        else if (typeof input[key] !== 'function') {
                            resolvedMeta = new PrimitiveTypeMeta(input[key]);
                        }
                        if (Reflect.hasMetadata(OnOATResolvedSymbol, input, key)) {
                            Reflect.getMetadata(OnOATResolvedSymbol, input, key)(input, key, resolvedMeta);
                        }
                        else if (typeof options.onResolved === 'function') {
                            options.onResolved(input, key, resolvedMeta);
                        }
                        // Finished, set resolved attribute metadata to result
                        mapping[Extractor.resolveAttributeKey(options, key, input)] = resolvedMeta;
                    }
                }
            }
            if (typeof input === 'object') {
                if (!(input instanceof Date) && !(input instanceof Array)) {
                    result = new NonPrimitiveTypeMeta('object', mapping);
                }
                else {
                    result = mapping;
                }
            }
            else {
                result = { mapping: mapping };
            }
            if (Reflect.hasMetadata(OnOATResolvedSymbol, input.constructor)) {
                Reflect.getMetadata(OnOATResolvedSymbol, input.constructor)(input.constructor, null, result);
            }
            else if (typeof options.onResolved === 'function') {
                options.onResolved(input, null, result);
            }
            return result;
        };
        ObjectAttributeTypeExtractor.generateObjectTypeMapping = function (object, key, options) {
            var resolvedMeta = null;
            // Mark type as any if value is null
            if (object[key] === null) {
                resolvedMeta = new PrimitiveTypeMeta(null);
                // For Array
            }
            else if (object[key] instanceof Array) {
                var target = object[key];
                // For Primitive Array
                if (typeof target[0] !== 'object') {
                    resolvedMeta = new NonPrimitiveTypeMeta('array', new PrimitiveTypeMeta(target[0]));
                    // For Object Array
                }
                else {
                    resolvedMeta = Extractor.generateMapping(target, options);
                }
                // For Date
            }
            else if (object[key] instanceof Date) {
                resolvedMeta = new NonPrimitiveTypeMeta('date', null, object[key]);
                // For Object
            }
            else {
                resolvedMeta = Extractor.generateMapping(object[key], options);
            }
            return resolvedMeta;
        };
        ObjectAttributeTypeExtractor.resolveAttributeKey = function (options, key, object) {
            var setterKey = key;
            // if set function exists, rename _attr to attr
            if (options.stripUnderscore && key.charAt(0) === '_') {
                var trimmedKey = key.substr(1, key.length);
                if (trimmedKey in object) {
                    setterKey = trimmedKey;
                }
            }
            // Some serializer serialize data with snake_case
            // but JS Entity Classes name attributes with camelCase
            if (options.keyNamingStrategy === 'snake_case') {
                setterKey = Extractor.convertStringToSnakeCase(setterKey);
            }
            return setterKey;
        };
        // For naming convention changing. Not really related to this extractor
        ObjectAttributeTypeExtractor.fixNamingConvention = function (data, options) {
            var result = null;
            options = Object.assign({
                keyNamingStrategy: 'camelCase',
                stripUnderscore: false
            }, options);
            if (data instanceof Array) {
                result = [];
                data.forEach(function (obj) {
                    result.push(Extractor.fixNamingConvention(obj, options));
                });
            }
            else if (typeof data === 'object') {
                result = {};
                for (var key in data) {
                    if (!options.stripUnderscore || key.charAt(0) !== '_') {
                        var finalKey = key;
                        if (options.keyNamingStrategy === 'snake_case') {
                            finalKey = Extractor.convertStringToSnakeCase(key);
                        }
                        if (typeof data[key] === 'object') {
                            result[finalKey] = Extractor.fixNamingConvention(data[key], options);
                        }
                        else {
                            result[finalKey] = data[key];
                        }
                    }
                }
            }
            return result;
        };
        // For JSON editor only. Should be extracted.
        ObjectAttributeTypeExtractor.convertDataToString = function (data, callbacks) {
            if (callbacks === void 0) { callbacks = {}; }
            var result = null;
            if (data instanceof Array) {
                result = [];
                data.forEach(function (obj) {
                    result.push(Extractor.convertDataToString(obj));
                });
            }
            else if (typeof data === 'object') {
                result = {};
                for (var key in data) {
                    if (typeof data[key] === 'object') {
                        if (data[key] instanceof Date) {
                            result[key] =
                                'date' in callbacks &&
                                    callbacks.date instanceof Function ?
                                    callbacks.date(data[key]) : data[key].yyyymmdd('-');
                        }
                        else {
                            result[key] = Extractor.convertDataToString(data[key]);
                        }
                    }
                    else if (typeof data[key] !== 'function') {
                        result[key] = data[key];
                    }
                }
            }
            return result;
        };
        ObjectAttributeTypeExtractor.convertStringToSnakeCase = function (value) {
            var result = value.replace(/([A-Z]+)/g, "_$1").toLowerCase();
            return result;
        };
        return ObjectAttributeTypeExtractor;
    }());
    var Extractor = ObjectAttributeTypeExtractor;

    var FormConfigSymbol = Symbol('FormConfig');
    function FormConfig(options) {
        var slug = null;
        if (options.label) {
            slug = options.label.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
        return Reflect.metadata(FormConfigSymbol, Object.assign({
            hiderHeader: false,
            slug: slug,
        }, options));
    }

    var ArrayOptionsSymbol = Symbol('IArrayOptionsFormConfig');
    function ArrayOptions(options) {
        return Reflect.metadata(ArrayOptionsSymbol, Object.assign({}, options));
    }

    var ObjectOptionsSymbol = Symbol('IObjectOptionsFormConfig');
    function ObjectOptions(options) {
        return Reflect.metadata(ObjectOptionsSymbol, Object.assign({}, options));
    }

    var AutocompleteSymbol = Symbol('IAutocompleteOptions');
    function AutocompleteOptions(options) {
        return Reflect.metadata(AutocompleteSymbol, {
            autocomplete: Object.assign({}, options)
        });
    }

    var ChoiceOptionsSymbol = Symbol('IChoiceOptionsFormConfig');
    function ChoiceOptions(options) {
        return Reflect.metadata(ChoiceOptionsSymbol, Object.assign({
            maxChoices: 1
        }, {
            renderType: 'select'
        }, options));
    }

    var OptionWrapper = /** @class */ (function () {
        function OptionWrapper(option) {
            this.label = '';
            this.control = new forms.FormControl();
            this.renderType = 'checkbox';
            this.options = [];
            this.options.push(option);
        }
        return OptionWrapper;
    }());
    var MultipleChoicesOptionsSymbol = Symbol('IMultipleChoicesOptionsFormConfig');
    function MultipleChoicesOptions(options) {
        return Reflect.metadata(MultipleChoicesOptionsSymbol, Object.assign({
            arrayType: 'enum'
        }, {
            maxChoices: null,
        }, options));
    }

    var FlexibleObjectArraySymbol = Symbol('IFlexibleObjectArrayFormConfig');
    function FlexibleObjectArray(options) {
        return Reflect.metadata(FlexibleObjectArraySymbol, Object.assign({
            expandOptions: false,
        }, options, {
            arrayType: 'object',
        }));
    }

    var MatExtraOptionsSymbol = Symbol('IMatExtraOptionsFormConfig');
    function MatExtraOptions(options) {
        return Reflect.metadata(MatExtraOptionsSymbol, Object.assign({}, options));
    }

    function onOATResolved(target, key, resolved) {
        if (!resolved.formFactory) {
            resolved.formFactory = {};
            [
                FormConfigSymbol,
                ArrayOptionsSymbol,
                ObjectOptionsSymbol,
                ChoiceOptionsSymbol,
                MultipleChoicesOptionsSymbol,
                FlexibleObjectArraySymbol,
                AutocompleteSymbol,
                MatExtraOptionsSymbol
            ].forEach(function (eachSymbol) {
                var getMetadataArgs = [eachSymbol, target];
                if (key) {
                    getMetadataArgs.push(key);
                }
                if (Reflect.hasMetadata.apply(Reflect, getMetadataArgs)) {
                    resolved.formFactory = Object.assign({}, resolved.formFactory, Reflect.getMetadata.apply(Reflect, getMetadataArgs));
                }
            });
        }
    }
    function SetupConfig() {
        return OnOATResolved(onOATResolved);
    }

    var Ng2FormFactory = /** @class */ (function () {
        function Ng2FormFactory() {
        }
        Ng2FormFactory.generateFormGroupByObject = function (formBuilder, object, resolveTypeAny, options) {
            if (resolveTypeAny === void 0) { resolveTypeAny = null; }
            if (options === void 0) { options = {}; }
            return Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, ObjectAttributeTypeExtractor.generateMapping(object, options), resolveTypeAny);
        };
        Ng2FormFactory.generateLabel = function (key) {
            var fixedKey = key.replace(/([A-Z]+)/g, " $1").replace(/_/g, ' ');
            return fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
        };
        Ng2FormFactory.generateFormGroupByOATMapping = function (formBuilder, attributeMappingObject, // Yet all attributes inside should be typeof ExtractorResultType
        resolveTypeAny, resolveTypeUndefined) {
            if (resolveTypeAny === void 0) { resolveTypeAny = null; }
            if (resolveTypeUndefined === void 0) { resolveTypeUndefined = null; }
            var result = {
                ngFormControl: {},
                templateConfig: {},
            };
            var isNonPrimitiveType = ['array', 'object'].indexOf(attributeMappingObject._type) > -1;
            var attrMapping = isNonPrimitiveType ? attributeMappingObject._mapping : attributeMappingObject;
            for (var key in attrMapping) {
                // TODO: Skip attributes should be configurable
                if (['id'].indexOf(key) > -1)
                    continue;
                var resolved = null;
                var currentTemplateConfig = null;
                var current = attrMapping[key];
                // Object or Array
                if (['object', 'array'].indexOf(current._type) > -1) {
                    if (current._type === 'array') {
                        resolved = Ng2FormFactory.handleArray(current, key, formBuilder);
                    }
                    else {
                        // Handle Object
                        var child = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder)();
                        resolved = {
                            groupType: 'object',
                            control: child.ngFormControl instanceof forms.FormGroup ?
                                child.ngFormControl : new forms.FormGroup(child.ngFormControl, Ng2FormFactory.resolveFormValidators(child).validators),
                            children: child.templateConfig
                        };
                    }
                }
                // Primitive type and date
                else if (current._type !== 'any') {
                    if (current !== 'undefined' && typeof current._type != 'undefined') {
                        var _a = Ng2FormFactory.resolveFormValidators(current), validators = _a.validators, valueNotEmpty = _a.valueNotEmpty;
                        currentTemplateConfig = {
                            type: current._type,
                            control: new forms.FormControl(valueNotEmpty ? current._value : '', validators)
                        };
                    }
                    else {
                        resolved = resolveTypeUndefined ? resolveTypeUndefined(current, key) : null; // Resolve as null first
                    }
                }
                // Last case: Null value => any
                else {
                    resolved = resolveTypeAny ? resolveTypeAny(current, key) : null; // Resolve as null first
                }
                // If resolved is still null, set it to default
                if (!currentTemplateConfig && !resolved) {
                    var validators = Ng2FormFactory.resolveFormValidators(current).validators;
                    resolved = {
                        type: 'string',
                        renderType: 'text',
                        control: new forms.FormControl('', validators)
                    };
                }
                // FIXME: this checking might be redundant
                if (resolved) {
                    currentTemplateConfig = resolved;
                }
                currentTemplateConfig.label = Ng2FormFactory.generateLabel(key);
                currentTemplateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(currentTemplateConfig);
                Ng2FormFactory.resolveTemplateConfigByType(current, currentTemplateConfig);
                result.ngFormControl[key] = currentTemplateConfig.control;
                result.templateConfig[key] = currentTemplateConfig;
            }
            result.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(result.templateConfig);
            if (isNonPrimitiveType) {
                result.templateConfig = {
                    groupType: attributeMappingObject.type,
                    children: result.templateConfig
                };
                Ng2FormFactory.setTemplatePreset(attributeMappingObject, result.templateConfig);
            }
            return result;
        };
        Ng2FormFactory.resolveFormValidators = function (current) {
            var validators = current.formFactory && current.formFactory.validators ? current.formFactory.validators : [], valueNotEmpty = [undefined, null].indexOf(current._value) === -1;
            validators = typeof validators === 'function' ? validators(Ng2FormFactory.diContainer) : validators;
            if (valueNotEmpty && validators.length === 0)
                validators.push(forms.Validators.required);
            return { validators: validators, valueNotEmpty: valueNotEmpty };
        };
        Ng2FormFactory.prepareAndCreateChildTemplateConfig = function (currentInput, key, formBuilder, isRaw) {
            if (isRaw === void 0) { isRaw = false; }
            var lambda = function () {
                var current = null;
                if (isRaw) {
                    // Mock an array type with targeted Prototype
                    current = new NonPrimitiveTypeMeta('array', ObjectAttributeTypeExtractor.generateMapping(new currentInput()));
                }
                else {
                    current = currentInput;
                }
                var schemaTemp = null;
                if ('type' in current._mapping &&
                    [
                        'any',
                        'string',
                        'boolean',
                        'number',
                        'date',
                        ''
                    ].indexOf(current._mapping.type) > -1) {
                    // For primitive type array
                    var control = new forms.FormControl('value' in current._mapping ? current._mapping.value : '', [forms.Validators.required]), templateConfig = {};
                    templateConfig[key] = {
                        label: Ng2FormFactory.generateLabel(key),
                        type: current._mapping.type,
                        control: control,
                    };
                    schemaTemp = {
                        ngFormControl: control,
                        templateConfig: templateConfig
                    };
                    Ng2FormFactory.resolveTemplateConfigByType(current._mapping, templateConfig[key]);
                }
                else {
                    // For reference type array or object
                    schemaTemp = Ng2FormFactory.generateFormGroupByOATMapping(formBuilder, current._mapping);
                }
                schemaTemp.templateConfig.setValue = Ng2FormFactory.factorySetValueFunctionToTemplate(schemaTemp.templateConfig);
                if ('formFactory' in current && typeof current.formFactory.onCreate === 'function') {
                    current.formFactory.onCreate(schemaTemp.templateConfig, Ng2FormFactory.diContainer);
                }
                return {
                    ngFormControl: schemaTemp.ngFormControl instanceof forms.FormControl || current.type === 'object' ?
                        schemaTemp.ngFormControl :
                        // For reference type array
                        new forms.FormGroup(schemaTemp.ngFormControl, Ng2FormFactory.resolveFormValidators(schemaTemp).validators),
                    templateConfig: schemaTemp.templateConfig
                };
            };
            return lambda;
        };
        Ng2FormFactory.handleArray = function (current, key, formBuilder) {
            var ngFormArrayControl = new forms.FormArray([], Ng2FormFactory.resolveFormValidators(current).validators);
            var initChildren = [];
            var arrayType = null;
            var result = {
                groupType: 'array',
                arrayType: current.formFactory && current.formFactory.arrayType ?
                    arrayType :
                    'type' in current._mapping ?
                        'primitive' : 'object',
                control: ngFormArrayControl,
                children: [],
                childrenConfigName: [],
                useConfig: 0,
                add: null,
                remove: null
            };
            if (current.formFactory && current.formFactory.objectDefinitions) {
                var i_1 = 0;
                current.formFactory.objectDefinitions.forEach(function (each) {
                    initChildren[i_1] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(each.structure, '', formBuilder, true);
                    result.childrenConfigName[i_1] = each.label;
                    i_1 += 1;
                });
            }
            else {
                initChildren[0] = Ng2FormFactory.prepareAndCreateChildTemplateConfig(current, key, formBuilder);
            }
            var add = function () {
                var childConfig = initChildren[result.useConfig]();
                var control = ngFormArrayControl;
                control.push(childConfig.ngFormControl);
                result.children.push(childConfig.templateConfig);
                childConfig.templateConfig.flexibleObjectTypeName = result.childrenConfigName[result.useConfig];
                if ('formFactory' in current && typeof current.formFactory.onPush === 'function') {
                    current.formFactory.onPush(childConfig.templateConfig, Ng2FormFactory.diContainer);
                }
            }, remove = function (i) {
                var control = ngFormArrayControl;
                control.removeAt(i);
                result.children.splice(i, 1);
            };
            result.add = add;
            result.remove = remove;
            // Ng2FormFactory.setTemplatePreset(current, result);
            return result;
        };
        Ng2FormFactory.factorySetValueFunctionToTemplate = function (templateObject) {
            var lambda = function (rawValue) {
                var _loop_1 = function () {
                    var targetTemplate = templateObject.groupType ? templateObject.children : templateObject;
                    if (key in targetTemplate) {
                        if (targetTemplate[key].type) {
                            if (typeof rawValue[key] != 'object') {
                                if ('beforeSetValue' in targetTemplate[key]) {
                                    targetTemplate[key].beforeSetValue(targetTemplate[key], rawValue);
                                }
                                targetTemplate[key].control.setValue(
                                // Do not cast to string or boolean value will be broken
                                rawValue[key]);
                                if ('afterSetValue' in targetTemplate[key]) {
                                    targetTemplate[key].afterSetValue(targetTemplate[key], rawValue);
                                }
                            }
                            else if (typeof rawValue[key] != 'undefined' || rawValue[key] != null) { // skip if rawValue[key] is null or undefined
                                // debugger;
                                // Something goes wrong
                            }
                        }
                        else {
                            // For Object
                            if (targetTemplate[key].groupType === 'object') {
                                // Let FormGroup to handle value setting
                                targetTemplate[key].setValue(rawValue[key]);
                            }
                            else {
                                // Even this field is array, rawValue[key] can be null
                                if (!rawValue[key])
                                    return "continue";
                                // Array
                                // Remove all elements
                                while (targetTemplate[key].control.controls.length > 0) {
                                    targetTemplate[key].remove(0);
                                }
                                var i_2 = 0;
                                rawValue[key].forEach(function (each) {
                                    if ('resolveFlexibleObjectArrayConfig' in targetTemplate[key]) {
                                        targetTemplate[key].useConfig = targetTemplate[key].resolveFlexibleObjectArrayConfig(each);
                                    }
                                    targetTemplate[key].add();
                                    var fixForPrimitiveArray = {};
                                    fixForPrimitiveArray[key] = each;
                                    targetTemplate[key].children[i_2].setValue(targetTemplate[key].arrayType !== 'object' ? fixForPrimitiveArray : each);
                                    i_2++;
                                });
                            }
                        }
                    }
                };
                for (var key in rawValue) {
                    _loop_1();
                }
            };
            return lambda;
        };
        Ng2FormFactory.resolveTemplateConfigByType = function (attrMapping, templateObj) {
            if (attrMapping.type === 'boolean') {
                templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
            }
            else if (attrMapping.options) {
                if (attrMapping.options.length > 2 && attrMapping.maxChoices) {
                    templateObj.renderType = attrMapping.expandOptions ? (attrMapping.maxChoices == 1 ?
                        'radio' : 'checkbox') : 'select';
                }
                else {
                    templateObj.renderType = attrMapping.expandOptions ? 'radio' : 'checkbox';
                }
            }
            else {
                templateObj.renderType = attrMapping.type;
                if (templateObj.type === 'string')
                    templateObj.renderType = 'text';
            }
            Ng2FormFactory.setTemplatePreset(attrMapping, templateObj);
        };
        // Copy setting from OAT to templateConfig object
        Ng2FormFactory.setTemplatePreset = function (attrMapping, templateObj) {
            [
                'label',
                'type',
                'useComponent',
                'beforeSetValue',
                'afterSetValue',
                'resolveFlexibleObjectArrayConfig',
                'maxChoices',
                'expandOptions',
                'options',
                'hints',
                'hide',
                'html',
                'renderType',
                'arrayType',
                'autocomplete',
                'matExtra',
            ].forEach(function (each) {
                if (attrMapping.formFactory && each in attrMapping.formFactory) {
                    templateObj[each] = attrMapping.formFactory[each];
                }
            });
            templateObj.diContainer = Ng2FormFactory.diContainer;
        };
        Ng2FormFactory.diContainer = new Map();
        return Ng2FormFactory;
    }());

    var MapToIterable = /** @class */ (function () {
        function MapToIterable() {
        }
        MapToIterable.prototype.transform = function (object) {
            var e_1, _a;
            var result = [];
            try {
                for (var _b = __values(Object.keys(object)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (object.hasOwnProperty(key)) {
                        result.push({ key: key, val: object[key] });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        };
        MapToIterable = __decorate([
            core.Pipe({
                name: 'mapToIterable'
            })
        ], MapToIterable);
        return MapToIterable;
    }());

    var directivesAndPipes = [
        HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent,
        MapToIterable,
    ];
    var HbFormModule = /** @class */ (function () {
        function HbFormModule() {
        }
        HbFormModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    // Material Design
                    animations.BrowserAnimationsModule,
                    autocomplete.MatAutocompleteModule,
                    button.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    datepicker.MatDatepickerModule,
                    expansion.MatExpansionModule,
                    input.MatInputModule,
                    core$1.MatNativeDateModule,
                    radio.MatRadioModule,
                    select.MatSelectModule
                ],
                declarations: directivesAndPipes,
                exports: __spread([
                    animations.BrowserAnimationsModule,
                    autocomplete.MatAutocompleteModule,
                    button.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    datepicker.MatDatepickerModule,
                    expansion.MatExpansionModule,
                    input.MatInputModule,
                    core$1.MatNativeDateModule,
                    radio.MatRadioModule,
                    select.MatSelectModule
                ], directivesAndPipes)
            })
        ], HbFormModule);
        return HbFormModule;
    }());

    exports.ArrayOptions = ArrayOptions;
    exports.ArrayOptionsSymbol = ArrayOptionsSymbol;
    exports.AutocompleteOptions = AutocompleteOptions;
    exports.AutocompleteSymbol = AutocompleteSymbol;
    exports.ChoiceOptions = ChoiceOptions;
    exports.ChoiceOptionsSymbol = ChoiceOptionsSymbol;
    exports.FlexibleObjectArray = FlexibleObjectArray;
    exports.FlexibleObjectArraySymbol = FlexibleObjectArraySymbol;
    exports.FormConfig = FormConfig;
    exports.FormConfigSymbol = FormConfigSymbol;
    exports.HbFormArrayComponent = HbFormArrayComponent;
    exports.HbFormMatArrayComponent = HbFormMatArrayComponent;
    exports.HbFormMatObjectComponent = HbFormMatObjectComponent;
    exports.HbFormMatWidgetComponent = HbFormMatWidgetComponent;
    exports.HbFormModule = HbFormModule;
    exports.HbFormObjectComponent = HbFormObjectComponent;
    exports.HbFormWidgetComponent = HbFormWidgetComponent;
    exports.MapToIterable = MapToIterable;
    exports.MatExtraOptions = MatExtraOptions;
    exports.MatExtraOptionsSymbol = MatExtraOptionsSymbol;
    exports.MultipleChoicesOptions = MultipleChoicesOptions;
    exports.MultipleChoicesOptionsSymbol = MultipleChoicesOptionsSymbol;
    exports.Ng2FormFactory = Ng2FormFactory;
    exports.NonPrimitiveTypeMeta = NonPrimitiveTypeMeta;
    exports.ObjectAttributeTypeExtractor = ObjectAttributeTypeExtractor;
    exports.ObjectOptions = ObjectOptions;
    exports.ObjectOptionsSymbol = ObjectOptionsSymbol;
    exports.OnOATResolved = OnOATResolved;
    exports.OptionWrapper = OptionWrapper;
    exports.PrimitiveTypeMeta = PrimitiveTypeMeta;
    exports.SetupConfig = SetupConfig;
    exports.TypeMeta = TypeMeta;
    exports.onOATResolved = onOATResolved;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hb-ng-form.umd.js.map
