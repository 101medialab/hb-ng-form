(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/autocomplete'), require('@angular/material/core'), require('@angular/material/radio'), require('@angular/material/checkbox'), require('@angular/material/select'), require('@angular/platform-browser/animations'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/datepicker'), require('@angular/material/expansion'), require('@angular/cdk/scrolling'), require('@angular/cdk/bidi'), require('@angular/cdk/text-field')) :
    typeof define === 'function' && define.amd ? define('hb-ng-form', ['exports', 'reflect-metadata', '@angular/core', 'rxjs', '@angular/common', '@angular/forms', '@angular/material/form-field', '@angular/material/input', '@angular/material/autocomplete', '@angular/material/core', '@angular/material/radio', '@angular/material/checkbox', '@angular/material/select', '@angular/platform-browser/animations', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/datepicker', '@angular/material/expansion', '@angular/cdk/scrolling', '@angular/cdk/bidi', '@angular/cdk/text-field'], factory) :
    (global = global || self, factory(global['hb-ng-form'] = {}, null, global.ng.core, global.rxjs, global.ng.common, global.ng.forms, global.ng.material.formField, global.ng.material.input, global.ng.material.autocomplete, global.ng.material.core, global.ng.material.radio, global.ng.material.checkbox, global.ng.material.select, global.ng.platformBrowser.animations, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.datepicker, global.ng.material.expansion, global.ng.cdk.scrolling, global.ng.cdk.bidi, global.ng.cdk.textField));
}(this, (function (exports, reflectMetadata, core, rxjs, common, forms, formField, input, autocomplete, core$1, radio, checkbox, select, animations, button, buttonToggle, card, datepicker, expansion, scrolling, bidi, textField) { 'use strict';

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

    var _c0 = ["customBlock"];
    function HbFormWidgetComponent_div_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "label");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext(3);
        core.ɵɵattribute("for", "hb-form-widget_" + (ctx_r4.key ? ctx_r4.key : ctx_r4.data.slug) + "-input")("class", ctx_r4.data == null ? null : ctx_r4.data.html == null ? null : ctx_r4.data.html.class == null ? null : ctx_r4.data.html.class.label);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r4.data.label);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r14 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵelementStart(1, "input", 10);
        core.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template_input_change_1_listener($event) { core.ɵɵrestoreView(_r14); var ctx_r13 = core.ɵɵnextContext(5); return ctx_r13.data.control.patchValue($event.target.value); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r10.data.renderType ? ctx_r10.data.renderType : "text")("placeholder", ctx_r10.data.placeholder !== undefined ? ctx_r10.data.placeholder : "")("formControl", ctx_r10.data.control);
        core.ɵɵattribute("id", "hb-form-widget_" + (ctx_r10.key ? ctx_r10.key : ctx_r10.data.slug) + "-input");
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_div_1_Template, 2, 4, "div", 6);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 7, 8, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r11 = core.ɵɵreference(3);
        var ctx_r8 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r8.data.selectOptionsObservables == undefined)("ngIfElse", _r11);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r8.data.autocomplete != undefined);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "textarea", 11);
        core.ɵɵtext(2, "                ");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("rows", (ctx_r9.data == null ? null : ctx_r9.data.html == null ? null : ctx_r9.data.html.textarea == null ? null : ctx_r9.data.html.textarea.row) || 5)("formControl", ctx_r9.data.control);
        core.ɵɵattribute("id", "hb-form-widget_" + (ctx_r9.key ? ctx_r9.key : ctx_r9.data.slug) + "-input");
    } }
    var _c1 = function () { return ["select", "radio", "checkbox", "textarea"]; };
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 4);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_ng_container_2_Template, 3, 3, "ng-container", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", core.ɵɵpureFunction0(2, _c1).indexOf(ctx_r5.data.renderType) === 0 - 1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.data.renderType == "textarea");
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "label", 16);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r19 = core.ɵɵnextContext().$implicit;
        var ctx_r20 = core.ɵɵnextContext(5);
        core.ɵɵpropertyInterpolate2("for", "hb-form-widget_", ctx_r20.key ? ctx_r20.key : ctx_r20.data.slug, "-input__", ctx_r20.slugifyString(option_r19.name), "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(option_r19.name);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        var _r26 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "input", 17);
        core.ɵɵlistener("select", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template_input_select_1_listener($event) { core.ɵɵrestoreView(_r26); var option_r19 = core.ɵɵnextContext().$implicit; var ctx_r25 = core.ɵɵnextContext(5); return (ctx_r25.parent == null ? null : ctx_r25.parent.arrayType) == "enum" ? ctx_r25.updateParentValue($event, option_r19) : ctx_r25.data.control.patchValue($event.target.value); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r19 = core.ɵɵnextContext().$implicit;
        var ctx_r21 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate2("id", "hb-form-widget_", ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug, "-input__", ctx_r21.slugifyString(option_r19.name), "");
        core.ɵɵproperty("value", option_r19.value)("checked", ctx_r21.data.control.value === option_r19.value || option_r19.id === ctx_r21.data.control.value ? true : null)("formControl", ctx_r21.data.control);
        core.ɵɵattribute("name", ctx_r21.data.renderType == "radio" ? (ctx_r21.key ? ctx_r21.key : ctx_r21.data.slug) + "-input" : null);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        var _r33 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "input", 19);
        core.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template_input_change_1_listener($event) { core.ɵɵrestoreView(_r33); var option_r19 = core.ɵɵnextContext(2).$implicit; var ctx_r32 = core.ɵɵnextContext(5); return (ctx_r32.parent == null ? null : ctx_r32.parent.arrayType) == "enum" ? ctx_r32.updateParentValue($event, option_r19) : ctx_r32.data.control.patchValue($event.target.value); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r19 = core.ɵɵnextContext(2).$implicit;
        var ctx_r29 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("value", option_r19.value)("checked", ctx_r29.data.control.value === option_r19.value || option_r19.id === ctx_r29.data.control.value ? true : null)("formControl", ctx_r29.data.control);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r37 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 20);
        core.ɵɵlistener("change", function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template_input_change_0_listener($event) { core.ɵɵrestoreView(_r37); var ctx_r36 = core.ɵɵnextContext(7); return ctx_r36.data.control.patchValue($event.target.checked); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r31 = core.ɵɵnextContext(7);
        core.ɵɵproperty("checked", ctx_r31.data.control.value ? true : null);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_container_0_Template, 2, 3, "ng-container", 2);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 18, core.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r30 = core.ɵɵreference(2);
        var ctx_r23 = core.ɵɵnextContext(6);
        core.ɵɵproperty("ngIf", (ctx_r23.parent == null ? null : ctx_r23.parent.arrayType) == "enum")("ngIfElse", _r30);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_label_1_Template, 2, 3, "label", 14);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 2);
        core.ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_ng_template_3_Template, 3, 2, "ng-template", null, 15, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r22 = core.ɵɵreference(4);
        var ctx_r18 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r18.parent == null ? null : ctx_r18.parent.arrayType) == "enum" || ctx_r18.data.renderType != "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r18.data.renderType == "radio")("ngIfElse", _r22);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_ng_container_1_Template, 5, 3, "ng-container", 13);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r15 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 1, ctx_r15.resolvedOptions));
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 24);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r40 = ctx.$implicit;
        core.ɵɵproperty("value", option_r40.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r40.name ? option_r40.name : option_r40.value, " ");
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "select", 22);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_option_1_Template, 2, 2, "option", 23);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r38 = core.ɵɵnextContext(5);
        core.ɵɵproperty("formControl", ctx_r38.data.control);
        core.ɵɵattribute("placeholder", ctx_r38.data.label != undefined ? ctx_r38.data.label : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 3, ctx_r38.resolvedOptions));
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_select_0_Template, 3, 5, "select", 21);
    } if (rf & 2) {
        var ctx_r17 = core.ɵɵnextContext(4);
        core.ɵɵproperty("ngIf", ctx_r17.data.renderType == "select");
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 2);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 12, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r16 = core.ɵɵreference(3);
        var ctx_r6 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r6.data.renderType != "select")("ngIfElse", _r16);
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 25);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r7.typeof(ctx_r7.data.hints) == "function" ? ctx_r7.data.hints(ctx_r7.data.diContainer, ctx_r7.data, ctx_r7.parent) : ctx_r7.data.hints, " ");
    } }
    function HbFormWidgetComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_label_1_Template, 2, 3, "label", 4);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 4);
        core.ɵɵtemplate(3, HbFormWidgetComponent_div_0_ng_container_1_ng_container_3_Template, 4, 2, "ng-container", 4);
        core.ɵɵtemplate(4, HbFormWidgetComponent_div_0_ng_container_1_span_4_Template, 2, 1, "span", 5);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.data.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r1.parent == null ? null : ctx_r1.parent.arrayType) !== "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.isOptionSelectingComponent());
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.data == null ? null : ctx_r1.data.hints);
    } }
    function HbFormWidgetComponent_div_0_ng_template_2_Template(rf, ctx) { }
    var _c2 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
    function HbFormWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵtemplate(1, HbFormWidgetComponent_div_0_ng_container_1_Template, 5, 4, "ng-container", 2);
        core.ɵɵtemplate(2, HbFormWidgetComponent_div_0_ng_template_2_Template, 0, 0, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r2 = core.ɵɵreference(3);
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(7, _c2, !ctx_r0.data.control.valid, ctx_r0.data.hints));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.data.useComponent)("ngIfElse", _r2);
    } }
    var HbFormWidgetComponent = /** @class */ (function () {
        function HbFormWidgetComponent(resolver) {
            this.resolver = resolver;
        }
        HbFormWidgetComponent.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log.apply(console, __spread(args));
        };
        HbFormWidgetComponent.prototype.ngAfterViewInit = function () {
            if (!this.data.hide && this.data.useComponent) {
                var factory = this.resolver.resolveComponentFactory(this.data.useComponent);
                var ref = this.customBlock.createComponent(factory);
                ref.instance.templateObject = this.data;
                ref.instance.parentTemplateObject = this.parent;
                ref.changeDetectorRef.detectChanges();
            }
        };
        HbFormWidgetComponent.prototype.isOptionSelectingComponent = function () {
            return ['radio', 'checkbox', 'select'].indexOf(this.data.renderType) > -1;
        };
        HbFormWidgetComponent.prototype.ngOnInit = function () {
            if (this.isOptionSelectingComponent()) {
                var data = this.data;
                var result = null;
                var resolved_1 = null;
                var options = [];
                if (data.options && (data.options.length ||
                    typeof data.options === 'function')) {
                    options = data.options;
                }
                else if (data.type === 'boolean' &&
                    data.renderType === 'checkbox') {
                    options = [{
                            name: data.label,
                            value: true,
                        }];
                }
                if (options.length === 0) {
                    throw new Error('No options set for ' + data.key + ' in ' + this.parent.key);
                }
                if (typeof options === 'function') {
                    resolved_1 = options(data.diContainer, this.data, this.parent);
                }
                else if (!(result instanceof rxjs.Observable)) {
                    resolved_1 = options;
                }
                result = resolved_1;
                if (!(resolved_1 instanceof rxjs.Observable)) {
                    result = new rxjs.Observable(function (o) {
                        o.next(resolved_1);
                        o.complete();
                    });
                }
                this.resolvedOptions = result;
            }
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
            if (input in HbFormWidgetComponent.slugMap) {
                return HbFormWidgetComponent.slugMap[input];
            }
            if (input) {
                return HbFormWidgetComponent.slugMap[input] = input
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');
            }
            else {
                throw new Error('Cannot slugify input, input is undefined.');
            }
        };
        HbFormWidgetComponent.slugMap = [];
        HbFormWidgetComponent.ɵfac = function HbFormWidgetComponent_Factory(t) { return new (t || HbFormWidgetComponent)(core.ɵɵdirectiveInject(core.ComponentFactoryResolver)); };
        HbFormWidgetComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormWidgetComponent, selectors: [["hb-form-widget"]], viewQuery: function HbFormWidgetComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.customBlock = _t.first);
            } }, inputs: { data: "data", key: "key", parent: "parent" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["customBlock", ""], [4, "ngIf"], ["class", "hints", 4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], [3, "type", "placeholder", "formControl", "change"], [3, "rows", "formControl"], ["selectBlock", ""], [4, "ngFor", "ngForOf"], [3, "for", 4, "ngIf"], ["checkBoxBlock", ""], [3, "for"], ["type", "radio", 1, "example-radio-button", 3, "id", "value", "checked", "formControl", "select"], ["booleanCheckBoxBlock", ""], ["type", "checkbox", 3, "value", "checked", "formControl", "change"], ["type", "checkbox", 3, "checked", "change"], [3, "formControl", 4, "ngIf"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hints"]], template: function HbFormWidgetComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormWidgetComponent_div_0_Template, 4, 10, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, directives: [common.NgIf, common.NgClass, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlDirective, common.NgForOf, forms.RadioControlValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x], pipes: [common.AsyncPipe], encapsulation: 2 });
        return HbFormWidgetComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormWidgetComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-form-widget',
                    templateUrl: './hb-form-widget.tpl.html',
                    inputs: ['data', 'key', 'parent']
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }]; }, { customBlock: [{
                type: core.ViewChild,
                args: ["customBlock", { read: core.ViewContainerRef, static: true }]
            }] }); })();

    function HbFormArrayComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h2");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1.data.label);
    } }
    function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var configName_r10 = ctx.$implicit;
        var i_r11 = ctx.index;
        core.ɵɵproperty("value", i_r11);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", configName_r10, " ");
    } }
    function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r13 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 11);
        core.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r13); var ctx_r12 = core.ɵɵnextContext(4); return ctx_r12.data.add(); });
        core.ɵɵtext(1, "Add");
        core.ɵɵelementEnd();
    } }
    var _c0$1 = function () { return { standalone: true }; };
    function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r15 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "select", 7);
        core.ɵɵlistener("ngModelChange", function HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template_select_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r15); var ctx_r14 = core.ɵɵnextContext(3); return ctx_r14.data.useConfig = $event; });
        core.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_option_2_Template, 2, 2, "option", 8);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_button_3_Template, 2, 0, "button", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r5.data.useConfig)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r5.data.childrenConfigName);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.data.arrayType != "enum");
    } }
    function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
        var _r20 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 13);
        core.ɵɵlistener("click", function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template_button_click_0_listener() { core.ɵɵrestoreView(_r20); var i_r18 = ctx.index; var ctx_r19 = core.ɵɵnextContext(4); ctx_r19.data.useConfig = i_r18; return ctx_r19.data.add(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var configName_r17 = ctx.$implicit;
        var i_r18 = ctx.index;
        core.ɵɵclassMapInterpolate1("btn btn-default hb-form-add-btn hb-form-add-btn-expanded-", i_r18, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" \u253C ", configName_r17, " ");
    } }
    function HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_button_0_Template, 2, 4, "button", 12);
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngForOf", ctx_r7.data.childrenConfigName);
    } }
    function HbFormArrayComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormArrayComponent_div_0_ng_container_3_ng_container_1_Template, 4, 5, "ng-container", 5);
        core.ɵɵtemplate(2, HbFormArrayComponent_div_0_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r6 = core.ɵɵreference(3);
        var ctx_r2 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2.data.expandOptions)("ngIfElse", _r6);
    } }
    function HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-widget", 16);
    } if (rf & 2) {
        var ctx_r26 = core.ɵɵnextContext();
        var cell_r21 = ctx_r26.$implicit;
        var i_r22 = ctx_r26.index;
        var ctx_r23 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", cell_r21)("key", i_r22)("parent", ctx_r23.data);
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-widget", 16);
    } if (rf & 2) {
        var each_r28 = core.ɵɵnextContext(2).$implicit;
        var i_r22 = core.ɵɵnextContext(2).index;
        var ctx_r30 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r28.val)("key", i_r22)("parent", ctx_r30.data);
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-array", 16);
    } if (rf & 2) {
        var each_r28 = core.ɵɵnextContext(2).$implicit;
        var ctx_r31 = core.ɵɵnextContext(4);
        core.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r31.data);
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-object", 16);
    } if (rf & 2) {
        var each_r28 = core.ɵɵnextContext(2).$implicit;
        var ctx_r32 = core.ɵɵnextContext(4);
        core.ɵɵproperty("data", each_r28.val)("key", each_r28.key)("parent", ctx_r32.data);
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
        core.ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_array_2_Template, 1, 3, "hb-form-array", 14);
        core.ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var each_r28 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", each_r28.val.groupType == undefined);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "array");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r28.val == null ? null : each_r28.val.groupType) == "object");
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var each_r28 = ctx.$implicit;
        core.ɵɵclassMapInterpolate1("panel panel-default hb-form-array-cell-attr_", each_r28.key, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !each_r28.hide && each_r28.key != "setValue");
    } }
    function HbFormArrayComponent_div_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
        core.ɵɵpipe(2, "mapToIterable");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var cell_r21 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 1, cell_r21.children));
    } }
    function HbFormArrayComponent_div_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r41 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 17);
        core.ɵɵlistener("click", function HbFormArrayComponent_div_0_div_4_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r41); var i_r22 = core.ɵɵnextContext().index; var ctx_r39 = core.ɵɵnextContext(2); return ctx_r39.data.remove(i_r22); });
        core.ɵɵtext(1, " \u2715 ");
        core.ɵɵelementEnd();
    } }
    function HbFormArrayComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormArrayComponent_div_0_div_4_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 14);
        core.ɵɵtemplate(2, HbFormArrayComponent_div_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
        core.ɵɵtemplate(3, HbFormArrayComponent_div_0_div_4_button_3_Template, 2, 0, "button", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cell_r21 = ctx.$implicit;
        var i_r22 = ctx.index;
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r21 == null ? null : cell_r21.flexibleObjectTypeName == null ? null : cell_r21.flexibleObjectTypeName.toLowerCase(), " ", cell_r21 == null ? null : cell_r21.html == null ? null : cell_r21.html.classAttr, "");
        core.ɵɵattribute("id", ctx_r3.data.id ? ctx_r3.data.id + "_" + i_r22 : null);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r3.data.arrayType == "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r3.data.arrayType != "enum");
    } }
    function HbFormArrayComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r4.typeof(ctx_r4.data.hints) == "function" ? ctx_r4.data.hints(ctx_r4.data.diContainer) : ctx_r4.data.hints, " ");
    } }
    var _c1$1 = function (a0) { return { "hb-form-with-hints": a0 }; };
    function HbFormArrayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "header");
        core.ɵɵtemplate(2, HbFormArrayComponent_div_0_h2_2_Template, 2, 1, "h2", 2);
        core.ɵɵtemplate(3, HbFormArrayComponent_div_0_ng_container_3_Template, 4, 2, "ng-container", 2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, HbFormArrayComponent_div_0_div_4_Template, 4, 8, "div", 3);
        core.ɵɵpipe(5, "async");
        core.ɵɵtemplate(6, HbFormArrayComponent_div_0_div_6_Template, 2, 1, "div", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate3("hb-form-array ", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
        core.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", core.ɵɵpureFunction1(14, _c1$1, ctx_r0.data.hints));
        core.ɵɵattribute("id", ctx_r0.data.id);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.data.childrenConfigName.length > 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : core.ɵɵpipeBind1(5, 12, ctx_r0.resolvedOptions));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
    } }
    var HbFormArrayComponent = /** @class */ (function (_super) {
        __extends(HbFormArrayComponent, _super);
        function HbFormArrayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormArrayComponent.ɵfac = function HbFormArrayComponent_Factory(t) { return ɵHbFormArrayComponent_BaseFactory(t || HbFormArrayComponent); };
        HbFormArrayComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormArrayComponent, selectors: [["hb-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [core.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "btn btn-default hb-form-add-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["type", "button", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["class", "btn btn-default hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["type", "button", 1, "btn", "btn-default", "hb-form-remove-btn", 3, "click"], [1, "hints"]], template: function HbFormArrayComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormArrayComponent_div_0_Template, 7, 16, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, encapsulation: 2 });
        return HbFormArrayComponent;
    }(HbFormWidgetComponent));
    var ɵHbFormArrayComponent_BaseFactory = core.ɵɵgetInheritedFactory(HbFormArrayComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormArrayComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-form-array',
                    templateUrl: './hb-form-array.tpl.html',
                    inputs: ['key', 'data', 'parent']
                }]
        }], null, null); })();

    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h2");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r4.data.label);
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var configName_r11 = ctx.$implicit;
        var i_r12 = ctx.index;
        core.ɵɵproperty("value", i_r12);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", configName_r11, " ");
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
        var _r14 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 11);
        core.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template_button_click_0_listener() { core.ɵɵrestoreView(_r14); var ctx_r13 = core.ɵɵnextContext(5); return ctx_r13.data.add(); });
        core.ɵɵtext(1, " Add ");
        core.ɵɵelementEnd();
    } }
    var _c0$2 = function () { return { standalone: true }; };
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r16 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "mat-form-field");
        core.ɵɵelementStart(2, "mat-select", 7);
        core.ɵɵlistener("ngModelChange", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template_mat_select_ngModelChange_2_listener($event) { core.ɵɵrestoreView(_r16); var ctx_r15 = core.ɵɵnextContext(4); return ctx_r15.data.useConfig = $event; });
        core.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_mat_option_3_Template, 2, 2, "mat-option", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_button_4_Template, 2, 0, "button", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext(4);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngModel", ctx_r6.data.useConfig)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$2));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r6.data.childrenConfigName);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r6.data.arrayType != "enum");
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template(rf, ctx) { if (rf & 1) {
        var _r21 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 13);
        core.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template_button_click_0_listener() { core.ɵɵrestoreView(_r21); var i_r19 = ctx.index; var ctx_r20 = core.ɵɵnextContext(5); ctx_r20.data.useConfig = i_r19; return ctx_r20.data.add(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var configName_r18 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" \u253C ", configName_r18, " ");
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_button_0_Template, 2, 1, "button", 12);
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext(4);
        core.ɵɵproperty("ngForOf", ctx_r8.data.childrenConfigName);
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_container_1_Template, 5, 5, "ng-container", 5);
        core.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r7 = core.ɵɵreference(3);
        var ctx_r5 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r5.data.expandOptions)("ngIfElse", _r7);
    } }
    function HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-card-title");
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_h2_1_Template, 2, 1, "h2", 2);
        core.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_ng_container_2_Template, 4, 2, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.data.label != "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.data.childrenConfigName.length > 0);
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-widget", 16);
    } if (rf & 2) {
        var ctx_r27 = core.ɵɵnextContext();
        var cell_r22 = ctx_r27.$implicit;
        var i_r23 = ctx_r27.index;
        var ctx_r24 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", cell_r22)("key", i_r23)("parent", ctx_r24.data);
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-widget", 16);
    } if (rf & 2) {
        var each_r29 = core.ɵɵnextContext(2).$implicit;
        var i_r23 = core.ɵɵnextContext(2).index;
        var ctx_r31 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r29.val)("key", i_r23)("parent", ctx_r31.data);
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-array", 16);
    } if (rf & 2) {
        var each_r29 = core.ɵɵnextContext(2).$implicit;
        var ctx_r32 = core.ɵɵnextContext(4);
        core.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r32.data);
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-object", 16);
    } if (rf & 2) {
        var each_r29 = core.ɵɵnextContext(2).$implicit;
        var ctx_r33 = core.ɵɵnextContext(4);
        core.ɵɵproperty("data", each_r29.val)("key", each_r29.key)("parent", ctx_r33.data);
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
        core.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_array_2_Template, 1, 3, "hb-mat-form-array", 14);
        core.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var each_r29 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", each_r29.val.groupType == undefined);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "array");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r29.val == null ? null : each_r29.val.groupType) == "object");
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_ng_container_1_Template, 4, 3, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var each_r29 = ctx.$implicit;
        core.ɵɵclassMapInterpolate1("hb-form-array-cell-attr_", each_r29.key, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !each_r29.hide && each_r29.key != "setValue");
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_div_1_Template, 2, 4, "div", 3);
        core.ɵɵpipe(2, "mapToIterable");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var cell_r22 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 1, cell_r22.children));
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r42 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 17);
        core.ɵɵlistener("click", function HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r42); var i_r23 = core.ɵɵnextContext().index; var ctx_r40 = core.ɵɵnextContext(2); return ctx_r40.data.remove(i_r23); });
        core.ɵɵtext(1, " \u2715 ");
        core.ɵɵelementEnd();
    } }
    function HbFormMatArrayComponent_mat_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormMatArrayComponent_mat_card_0_div_4_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 14);
        core.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_div_4_ng_container_2_Template, 3, 3, "ng-container", 2);
        core.ɵɵtemplate(3, HbFormMatArrayComponent_mat_card_0_div_4_button_3_Template, 2, 0, "button", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cell_r22 = ctx.$implicit;
        var i_r23 = ctx.index;
        var ctx_r2 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate2("hb-form-array-cell hb-form-array-cell_", cell_r22 == null ? null : cell_r22.flexibleObjectTypeName == null ? null : cell_r22.flexibleObjectTypeName.toLowerCase(), " ", cell_r22 == null ? null : cell_r22.html == null ? null : cell_r22.html.classAttr, "");
        core.ɵɵattribute("id", ctx_r2.data.id + "-" + i_r23);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2.data.arrayType == "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2.data.arrayType != "enum");
    } }
    function HbFormMatArrayComponent_mat_card_0_strong_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "strong", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
    } }
    var _c1$2 = function (a0) { return { "hb-form-with-hints": a0 }; };
    function HbFormMatArrayComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-card", 1);
        core.ɵɵelementStart(1, "mat-card-header");
        core.ɵɵtemplate(2, HbFormMatArrayComponent_mat_card_0_mat_card_title_2_Template, 3, 2, "mat-card-title", 2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-card-content");
        core.ɵɵtemplate(4, HbFormMatArrayComponent_mat_card_0_div_4_Template, 4, 8, "div", 3);
        core.ɵɵpipe(5, "async");
        core.ɵɵtemplate(6, HbFormMatArrayComponent_mat_card_0_strong_6_Template, 2, 1, "strong", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate3("hb-form-array hb-array-type_", ctx_r0.data.arrayType, " hb-form-array_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
        core.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", core.ɵɵpureFunction1(13, _c1$2, ctx_r0.data.hints));
        core.ɵɵattribute("id", ctx_r0.data.id);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.data.hideHeader);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r0.data.arrayType != "enum" ? ctx_r0.data.children : core.ɵɵpipeBind1(5, 11, ctx_r0.resolvedOptions));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
    } }
    var HbFormMatArrayComponent = /** @class */ (function (_super) {
        __extends(HbFormMatArrayComponent, _super);
        function HbFormMatArrayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormMatArrayComponent.ɵfac = function HbFormMatArrayComponent_Factory(t) { return ɵHbFormMatArrayComponent_BaseFactory(t || HbFormMatArrayComponent); };
        HbFormMatArrayComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormMatArrayComponent, selectors: [["hb-mat-form-array"]], inputs: { key: "key", data: "data", parent: "parent" }, features: [core.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "class", "formGroup", "ngClass", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedArrayPushOptions", ""], [1, "hb-form-array-config-switch", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "class", "btn btn-default hb-form-add-btn", 3, "click", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", "type", "button", 1, "btn", "btn-default", "hb-form-add-btn", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 3, "click"], [3, "data", "key", "parent", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "class", "hb-form-remove-btn", "type", "button", 3, "click", 4, "ngIf"], [3, "data", "key", "parent"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "hb-form-remove-btn", 3, "click"], [1, "mat-hint"]], template: function HbFormMatArrayComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormMatArrayComponent_mat_card_0_Template, 7, 15, "mat-card", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, encapsulation: 2 });
        return HbFormMatArrayComponent;
    }(HbFormArrayComponent));
    var ɵHbFormMatArrayComponent_BaseFactory = core.ɵɵgetInheritedFactory(HbFormMatArrayComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormMatArrayComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-mat-form-array',
                    templateUrl: './hb-form-mat-array.tpl.html',
                    inputs: ['key', 'data', 'parent']
                }]
        }], null, null); })();

    function HbFormObjectComponent_div_0_h2_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h2");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
    } }
    function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-widget", 8);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r6 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
    } }
    function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-array", 9);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r7 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
    } }
    function HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-form-object", 8);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r8 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
    } }
    function HbFormObjectComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_widget_1_Template, 1, 3, "hb-form-widget", 6);
        core.ɵɵtemplate(2, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_array_2_Template, 1, 4, "hb-form-array", 7);
        core.ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_ng_container_1_hb_form_object_3_Template, 1, 3, "hb-form-object", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
    } }
    function HbFormObjectComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormObjectComponent_div_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var each_r4 = ctx.$implicit;
        core.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
    } }
    function HbFormObjectComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
    } }
    var _c0$3 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
    function HbFormObjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵtemplate(1, HbFormObjectComponent_div_0_h2_1_Template, 2, 1, "h2", 2);
        core.ɵɵelementStart(2, "div", 3);
        core.ɵɵtemplate(3, HbFormObjectComponent_div_0_div_3_Template, 2, 4, "div", 4);
        core.ɵɵpipe(4, "mapToIterable");
        core.ɵɵtemplate(5, HbFormObjectComponent_div_0_span_5_Template, 2, 1, "span", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
        core.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", core.ɵɵpureFunction2(11, _c0$3, !ctx_r0.data.control.valid, ctx_r0.data.hints));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(4, 9, ctx_r0.data.children));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
    } }
    var HbFormObjectComponent = /** @class */ (function (_super) {
        __extends(HbFormObjectComponent, _super);
        function HbFormObjectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormObjectComponent.ɵfac = function HbFormObjectComponent_Factory(t) { return ɵHbFormObjectComponent_BaseFactory(t || HbFormObjectComponent); };
        HbFormObjectComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormObjectComponent, selectors: [["hb-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [core.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "hints", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "hints"]], template: function HbFormObjectComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormObjectComponent_div_0_Template, 6, 14, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, encapsulation: 2 });
        return HbFormObjectComponent;
    }(HbFormWidgetComponent));
    var ɵHbFormObjectComponent_BaseFactory = core.ɵɵgetInheritedFactory(HbFormObjectComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormObjectComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-form-object',
                    templateUrl: './hb-form-object.tpl.html',
                    inputs: ['id', 'key', 'data', 'parent']
                }]
        }], null, null); })();

    function HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-card-header");
        core.ɵɵelementStart(1, "mat-card-title");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r1.data.label, " ");
    } }
    function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-widget", 8);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r6 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r6.data);
    } }
    function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-array", 9);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r7 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("formArrayName", each_r4.key)("parent", ctx_r7.data);
    } }
    function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "hb-mat-form-object", 8);
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext(2).$implicit;
        var ctx_r8 = core.ɵɵnextContext(2);
        core.ɵɵproperty("data", each_r4.val)("key", each_r4.key)("parent", ctx_r8.data);
    } }
    function HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_widget_1_Template, 1, 3, "hb-mat-form-widget", 6);
        core.ɵɵtemplate(2, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_array_2_Template, 1, 4, "hb-mat-form-array", 7);
        core.ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_hb_mat_form_object_3_Template, 1, 3, "hb-mat-form-object", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var each_r4 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", each_r4.val.groupType == undefined && each_r4.key != "setValue");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "array");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (each_r4.val == null ? null : each_r4.val.groupType) == "object" && each_r4.key != "setValue");
    } }
    function HbFormMatObjectComponent_mat_card_0_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_div_3_ng_container_1_Template, 4, 3, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var each_r4 = ctx.$implicit;
        core.ɵɵclassMapInterpolate1("hb-form-obj-attr_", each_r4.key, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !each_r4.hide && each_r4.key != "setValue");
    } }
    function HbFormMatObjectComponent_mat_card_0_strong_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "strong", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r3.typeof(ctx_r3.data.hints) == "function" ? ctx_r3.data.hints(ctx_r3.data.diContainer) : ctx_r3.data.hints, " ");
    } }
    var _c0$4 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
    function HbFormMatObjectComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-card", 1);
        core.ɵɵtemplate(1, HbFormMatObjectComponent_mat_card_0_mat_card_header_1_Template, 3, 1, "mat-card-header", 2);
        core.ɵɵelementStart(2, "mat-card-content", 3);
        core.ɵɵtemplate(3, HbFormMatObjectComponent_mat_card_0_div_3_Template, 2, 4, "div", 4);
        core.ɵɵpipe(4, "mapToIterable");
        core.ɵɵtemplate(5, HbFormMatObjectComponent_mat_card_0_strong_5_Template, 2, 1, "strong", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("form-object ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, " hb-form-obj_", ctx_r0.key, "");
        core.ɵɵproperty("formGroup", ctx_r0.data.control)("ngClass", core.ɵɵpureFunction2(11, _c0$4, !ctx_r0.data.control.valid, ctx_r0.data.hints));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.typeof(ctx_r0.data.label) == "string" && ctx_r0.data.label != "" && !ctx_r0.data.hideHeader);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(4, 9, ctx_r0.data.children));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.data == null ? null : ctx_r0.data.hints);
    } }
    var HbFormMatObjectComponent = /** @class */ (function (_super) {
        __extends(HbFormMatObjectComponent, _super);
        function HbFormMatObjectComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HbFormMatObjectComponent.ɵfac = function HbFormMatObjectComponent_Factory(t) { return ɵHbFormMatObjectComponent_BaseFactory(t || HbFormMatObjectComponent); };
        HbFormMatObjectComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormMatObjectComponent, selectors: [["hb-mat-form-object"]], inputs: { id: "id", key: "key", data: "data", parent: "parent" }, features: [core.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", "ngClass", "class", 4, "ngIf"], [3, "formGroup", "ngClass"], [4, "ngIf"], [1, "hb-form-object-content"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "mat-hint", 4, "ngIf"], [3, "data", "key", "parent", 4, "ngIf"], [3, "data", "key", "formArrayName", "parent", 4, "ngIf"], [3, "data", "key", "parent"], [3, "data", "key", "formArrayName", "parent"], [1, "mat-hint"]], template: function HbFormMatObjectComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormMatObjectComponent_mat_card_0_Template, 6, 14, "mat-card", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, encapsulation: 2 });
        return HbFormMatObjectComponent;
    }(HbFormObjectComponent));
    var ɵHbFormMatObjectComponent_BaseFactory = core.ɵɵgetInheritedFactory(HbFormMatObjectComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormMatObjectComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-mat-form-object',
                    templateUrl: './hb-form-mat-object.tpl.html',
                    inputs: ['id', 'key', 'data', 'parent']
                }]
        }], null, null); })();

    function HbFormMatWidgetComponent_div_0_ng_template_1_Template(rf, ctx) { }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 12);
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext(5);
        core.ɵɵproperty("innerHtml", ctx_r10.data.matExtra.matPrefix, core.ɵɵsanitizeHtml);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-hint", 13);
        core.ɵɵelementStart(1, "strong");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.ɵɵnextContext(5);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r11.typeof(ctx_r11.data.hints) == "function" ? ctx_r11.data.hints(ctx_r11.data.diContainer, ctx_r11.data, ctx_r11.parent) : ctx_r11.data.hints, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 14);
    } if (rf & 2) {
        var ctx_r12 = core.ɵɵnextContext(5);
        core.ɵɵproperty("innerHtml", ctx_r12.data.matExtra.matSuffix, core.ɵɵsanitizeHtml);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
        var _r14 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 7);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_1_Template, 1, 1, "div", 8);
        core.ɵɵelementStart(2, "input", 9);
        core.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template_input_change_2_listener($event) { core.ɵɵrestoreView(_r14); var ctx_r13 = core.ɵɵnextContext(4); return ctx_r13.data.control.patchValue($event.target.value); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_mat_hint_3_Template, 3, 1, "mat-hint", 10);
        core.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_div_4_Template, 1, 1, "div", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matPrefix);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r7.data.renderType ? ctx_r7.data.renderType : "text")("placeholder", ctx_r7.data.label !== undefined ? ctx_r7.data.label : null)("formControl", ctx_r7.data.control);
        core.ɵɵattribute("id", (ctx_r7.key ? ctx_r7.key : ctx_r7.data.slug) + "-input");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.hints);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r7.data == null ? null : ctx_r7.data.matExtra == null ? null : ctx_r7.data.matExtra.matSuffix);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 18);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r19 = ctx.$implicit;
        core.ɵɵproperty("value", option_r19.value);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(option_r19.label);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-hint", 13);
        core.ɵɵelementStart(1, "strong");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r18 = core.ɵɵnextContext(6);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r18.typeof(ctx_r18.data.hints) == "function" ? ctx_r18.data.hints(ctx_r18.data.diContainer, ctx_r18.data, ctx_r18.parent) : ctx_r18.data.hints, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
        var _r21 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "input", 15);
        core.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template_input_change_1_listener($event) { core.ɵɵrestoreView(_r21); var ctx_r20 = core.ɵɵnextContext(5); return ctx_r20.data.control.patchValue($event.target.value); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "mat-autocomplete", null, 16);
        core.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_option_4_Template, 3, 2, "mat-option", 17);
        core.ɵɵpipe(5, "async");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_mat_hint_6_Template, 3, 1, "mat-hint", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r16 = core.ɵɵreference(3);
        var ctx_r15 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("placeholder", ctx_r15.data.label !== undefined ? ctx_r15.data.label : ctx_r15.data.option.name);
        core.ɵɵproperty("type", ctx_r15.data.renderType ? ctx_r15.data.renderType : "text")("formControl", ctx_r15.data.control)("matAutocomplete", _r16);
        core.ɵɵattribute("id", ctx_r15.key ? ctx_r15.key : ctx_r15.data.slug + "-input");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(5, 7, ctx_r15.data.selectOptionsObservables));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r15.data == null ? null : ctx_r15.data.hints);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_mat_form_field_0_Template, 7, 9, "mat-form-field", 3);
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext(4);
        core.ɵɵproperty("ngIf", ctx_r9.data.autocomplete.renderType != "custom");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_mat_form_field_1_Template, 5, 7, "mat-form-field", 4);
        core.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", 5, 6, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r8 = core.ɵɵreference(3);
        var ctx_r5 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.data.selectOptionsObservables == undefined)("ngIfElse", _r8);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.data.autocomplete != undefined);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-hint", 13);
        core.ɵɵelementStart(1, "strong");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r22 = core.ɵɵnextContext(4);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r22.typeof(ctx_r22.data.hints) == "function" ? ctx_r22.data.hints(ctx_r22.data.diContainer, ctx_r22.data, ctx_r22.parent) : ctx_r22.data.hints, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵelementStart(1, "textarea", 19);
        core.ɵɵtext(2, "            ");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_mat_hint_3_Template, 3, 1, "mat-hint", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("formControl", ctx_r6.data.control)("placeholder", ctx_r6.data.label ? ctx_r6.data.label : ctx_r6.data.option.name);
        core.ɵɵattribute("id", ctx_r6.key ? ctx_r6.key : ctx_r6.data.slug + "-input");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r6.data == null ? null : ctx_r6.data.hints);
    } }
    var _c0$5 = function () { return ["select", "radio", "checkbox", "textarea"]; };
    function HbFormMatWidgetComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_3_ng_container_1_Template, 4, 3, "ng-container", 3);
        core.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_3_mat_form_field_2_Template, 4, 4, "mat-form-field", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", core.ɵɵpureFunction0(2, _c0$5).indexOf(ctx_r3.data.renderType) === 0 - 1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r3.data.renderType === "textarea");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r32 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-radio-button", 26);
        core.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template_mat_radio_button_change_0_listener($event) { core.ɵɵrestoreView(_r32); var option_r30 = ctx.$implicit; var ctx_r31 = core.ɵɵnextContext(5); return ctx_r31.updateParentValue($event, option_r30); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r30 = ctx.$implicit;
        var ctx_r29 = core.ɵɵnextContext(5);
        core.ɵɵproperty("value", option_r30.value)("checked", ctx_r29.data.control.value === option_r30.value || option_r30.id === ctx_r29.data.control.value ? true : null);
        core.ɵɵattribute("name", ctx_r29.data.renderType == "radio" ? (ctx_r29.key ? ctx_r29.key : ctx_r29.data.slug) + "-input" : null);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r30.name, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-group", 24);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_mat_radio_button_1_Template, 2, 4, "mat-radio-button", 25);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r26 = core.ɵɵnextContext(4);
        core.ɵɵproperty("formControl", ctx_r26.data.control);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r26.data.options);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
        var _r39 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 29);
        core.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) { core.ɵɵrestoreView(_r39); var option_r37 = ctx.$implicit; var ctx_r38 = core.ɵɵnextContext(6); return ctx_r38.updateParentValue($event, option_r37); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r37 = ctx.$implicit;
        var ctx_r36 = core.ɵɵnextContext(6);
        core.ɵɵproperty("value", option_r37.value)("checked", ctx_r36.data.control.value === option_r37.value || option_r37.id === ctx_r36.data.control.value ? true : null)("formControl", ctx_r36.data.control);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r37.name, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_mat_checkbox_1_Template, 2, 4, "mat-checkbox", 28);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r33 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r33.data.options);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r41 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "label");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "mat-checkbox", 30);
        core.ɵɵlistener("change", function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template_mat_checkbox_change_2_listener($event) { core.ɵɵrestoreView(_r41); var ctx_r40 = core.ɵɵnextContext(5); return ctx_r40.data.control.patchValue($event.source.checked); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r35 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r35.data.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("checked", ctx_r35.data.control.value ? true : null);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 20);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_ng_template_1_Template, 3, 2, "ng-template", null, 27, core.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r34 = core.ɵɵreference(2);
        var ctx_r28 = core.ɵɵnextContext(4);
        core.ɵɵproperty("ngIf", (ctx_r28.parent == null ? null : ctx_r28.parent.arrayType) == "enum")("ngIfElse", _r34);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_mat_radio_group_1_Template, 2, 2, "mat-radio-group", 22);
        core.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_ng_template_2_Template, 3, 2, "ng-template", null, 23, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r27 = core.ɵɵreference(3);
        var ctx_r23 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r23.data.renderType == "radio")("ngIfElse", _r27);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r45 = ctx.$implicit;
        core.ɵɵproperty("value", option_r45.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r45.name ? option_r45.name : option_r45.value, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-select", 32);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 17);
        core.ɵɵpipe(2, "async");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r42 = core.ɵɵnextContext(4);
        core.ɵɵproperty("formControl", ctx_r42.data.control)("placeholder", ctx_r42.data.label != undefined ? ctx_r42.data.label : null);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 3, ctx_r42.resolvedOptions));
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-hint", 13);
        core.ɵɵelementStart(1, "strong");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r43 = core.ɵɵnextContext(4);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r43.typeof(ctx_r43.data.hints) == "function" ? ctx_r43.data.hints(ctx_r43.data.diContainer, ctx_r43.data, ctx_r43.parent) : ctx_r43.data.hints, " ");
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-form-field");
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_select_1_Template, 3, 5, "mat-select", 31);
        core.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_mat_hint_2_Template, 3, 1, "mat-hint", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r25 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r25.data.renderType == "select");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r25.data == null ? null : ctx_r25.data.hints);
    } }
    function HbFormMatWidgetComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_container_4_div_1_Template, 4, 2, "div", 20);
        core.ɵɵtemplate(2, HbFormMatWidgetComponent_div_0_ng_container_4_ng_template_2_Template, 3, 2, "ng-template", null, 21, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r24 = core.ɵɵreference(3);
        var ctx_r4 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.data.renderType != "select")("ngIfElse", _r24);
    } }
    var _c1$3 = function (a0, a1) { return { "error": a0, "hb-form-with-hints": a1 }; };
    var _c2$1 = function () { return ["radio", "checkbox", "select"]; };
    function HbFormMatWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵtemplate(1, HbFormMatWidgetComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(3, HbFormMatWidgetComponent_div_0_ng_container_3_Template, 3, 3, "ng-container", 3);
        core.ɵɵtemplate(4, HbFormMatWidgetComponent_div_0_ng_container_4_Template, 4, 2, "ng-container", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("expand-to-child hb-form-widget hb-form-widget_", ctx_r0.key, " ", ctx_r0.data == null ? null : ctx_r0.data.html == null ? null : ctx_r0.data.html.classAttr, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(7, _c1$3, !ctx_r0.data.control.valid, ctx_r0.data.hints));
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", !ctx_r0.data.useComponent && (ctx_r0.parent == null ? null : ctx_r0.parent.arrayType) !== "enum");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.data.useComponent && core.ɵɵpureFunction0(10, _c2$1).indexOf(ctx_r0.data.renderType) > 0 - 1);
    } }
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
        HbFormMatWidgetComponent.ɵfac = function HbFormMatWidgetComponent_Factory(t) { return ɵHbFormMatWidgetComponent_BaseFactory(t || HbFormMatWidgetComponent); };
        HbFormMatWidgetComponent.ɵcmp = core.ɵɵdefineComponent({ type: HbFormMatWidgetComponent, selectors: [["hb-mat-form-widget"]], inputs: { data: "data", key: "key", parent: "parent" }, features: [core.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["customBlock", ""], [4, "ngIf"], ["class", "hb-form-widget-input-field", 4, "ngIf", "ngIfElse"], [3, "ngIf"], ["autocompleteBlock", ""], [1, "hb-form-widget-input-field"], ["class", "form-field-prefix", "matPrefix", "", 3, "innerHtml", 4, "ngIf"], ["matInput", "", 3, "type", "placeholder", "formControl", "change"], ["align", "start", 4, "ngIf"], ["class", "form-field-suffix", "matSuffix", "", 3, "innerHtml", 4, "ngIf"], ["matPrefix", "", 1, "form-field-prefix", 3, "innerHtml"], ["align", "start"], ["matSuffix", "", 1, "form-field-suffix", 3, "innerHtml"], ["matInput", "", 3, "type", "placeholder", "formControl", "matAutocomplete", "change"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "rows", "5", 3, "formControl", "placeholder"], [4, "ngIf", "ngIfElse"], ["selectBlock", ""], [3, "formControl", 4, "ngIf", "ngIfElse"], ["checkBoxBlock", ""], [3, "formControl"], ["class", "example-radio-button", 3, "value", "checked", "change", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value", "checked", "change"], ["booleanCheckboxBlock", ""], [3, "value", "checked", "formControl", "change", 4, "ngFor", "ngForOf"], [3, "value", "checked", "formControl", "change"], [3, "checked", "change"], [3, "formControl", "placeholder", 4, "ngIf"], [3, "formControl", "placeholder"]], template: function HbFormMatWidgetComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, HbFormMatWidgetComponent_div_0_Template, 5, 11, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data.control != undefined && (ctx.data.groupType == undefined || ctx.parent.arrayType == "enum") && ctx.key != "setValue" && (ctx.data.hide == undefined || !ctx.data.hide));
            } }, directives: [common.NgIf, common.NgClass, formField.MatFormField, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlDirective, formField.MatPrefix, formField.MatHint, formField.MatSuffix, autocomplete.MatAutocompleteTrigger, autocomplete.MatAutocomplete, common.NgForOf, core$1.MatOption, radio.MatRadioGroup, radio.MatRadioButton, checkbox.MatCheckbox, select.MatSelect], pipes: [common.AsyncPipe], encapsulation: 2 });
        return HbFormMatWidgetComponent;
    }(HbFormWidgetComponent));
    var ɵHbFormMatWidgetComponent_BaseFactory = core.ɵɵgetInheritedFactory(HbFormMatWidgetComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormMatWidgetComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hb-mat-form-widget',
                    templateUrl: './hb-form-mat-widget.tpl.html',
                    inputs: ['data', 'key', 'parent']
                }]
        }], null, null); })();

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
        MapToIterable.ɵfac = function MapToIterable_Factory(t) { return new (t || MapToIterable)(); };
        MapToIterable.ɵpipe = core.ɵɵdefinePipe({ name: "mapToIterable", type: MapToIterable, pure: true });
        return MapToIterable;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MapToIterable, [{
            type: core.Pipe,
            args: [{
                    name: 'mapToIterable'
                }]
        }], null, null); })();

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
        HbFormModule.ɵmod = core.ɵɵdefineNgModule({ type: HbFormModule });
        HbFormModule.ɵinj = core.ɵɵdefineInjector({ factory: function HbFormModule_Factory(t) { return new (t || HbFormModule)(); }, imports: [[
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
                select.MatSelectModule] });
        return HbFormModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(HbFormModule, { declarations: [HbFormArrayComponent,
            HbFormMatArrayComponent,
            HbFormObjectComponent,
            HbFormMatObjectComponent,
            HbFormWidgetComponent,
            HbFormMatWidgetComponent,
            MapToIterable], imports: [forms.FormsModule,
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
            select.MatSelectModule], exports: [animations.BrowserAnimationsModule,
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
            select.MatSelectModule,
            HbFormArrayComponent,
            HbFormMatArrayComponent,
            HbFormObjectComponent,
            HbFormMatObjectComponent,
            HbFormWidgetComponent,
            HbFormMatWidgetComponent,
            MapToIterable] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HbFormModule, [{
            type: core.NgModule,
            args: [{
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
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(HbFormArrayComponent, [forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, forms.FormControlDirective, forms.FormGroupDirective, forms.FormControlName, forms.FormGroupName, forms.FormArrayName, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, scrolling.CdkScrollable, autocomplete.MatAutocomplete, core$1.MatOption, core$1.MatOptgroup, autocomplete.MatAutocompleteTrigger, autocomplete.MatAutocompleteOrigin, bidi.Dir, button.MatButton, button.MatAnchor, buttonToggle.MatButtonToggleGroup, buttonToggle.MatButtonToggle, card.MatCard, card.MatCardHeader, card.MatCardTitleGroup, card.MatCardContent, card.MatCardTitle, card.MatCardSubtitle, card.MatCardActions, card.MatCardFooter, card.MatCardSmImage, card.MatCardMdImage, card.MatCardLgImage, card.MatCardImage, card.MatCardXlImage, card.MatCardAvatar, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, datepicker.MatCalendar, datepicker.MatCalendarBody, datepicker.MatDatepicker, datepicker.MatDatepickerContent, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, datepicker.MatDatepickerToggleIcon, datepicker.MatMonthView, datepicker.MatYearView, datepicker.MatMultiYearView, datepicker.MatCalendarHeader, expansion.MatAccordion, expansion.MatExpansionPanel, expansion.MatExpansionPanelActionRow, expansion.MatExpansionPanelHeader, expansion.MatExpansionPanelTitle, expansion.MatExpansionPanelDescription, expansion.MatExpansionPanelContent, textField.CdkAutofill, textField.CdkTextareaAutosize, formField.MatError, formField.MatFormField, formField.MatHint, formField.MatLabel, formField.MatPlaceholder, formField.MatPrefix, formField.MatSuffix, input.MatInput, input.MatTextareaAutosize, radio.MatRadioGroup, radio.MatRadioButton, select.MatSelect, select.MatSelectTrigger, HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, MapToIterable]);
    core.ɵɵsetComponentScope(HbFormMatArrayComponent, [forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, forms.FormControlDirective, forms.FormGroupDirective, forms.FormControlName, forms.FormGroupName, forms.FormArrayName, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, scrolling.CdkScrollable, autocomplete.MatAutocomplete, core$1.MatOption, core$1.MatOptgroup, autocomplete.MatAutocompleteTrigger, autocomplete.MatAutocompleteOrigin, bidi.Dir, button.MatButton, button.MatAnchor, buttonToggle.MatButtonToggleGroup, buttonToggle.MatButtonToggle, card.MatCard, card.MatCardHeader, card.MatCardTitleGroup, card.MatCardContent, card.MatCardTitle, card.MatCardSubtitle, card.MatCardActions, card.MatCardFooter, card.MatCardSmImage, card.MatCardMdImage, card.MatCardLgImage, card.MatCardImage, card.MatCardXlImage, card.MatCardAvatar, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, datepicker.MatCalendar, datepicker.MatCalendarBody, datepicker.MatDatepicker, datepicker.MatDatepickerContent, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, datepicker.MatDatepickerToggleIcon, datepicker.MatMonthView, datepicker.MatYearView, datepicker.MatMultiYearView, datepicker.MatCalendarHeader, expansion.MatAccordion, expansion.MatExpansionPanel, expansion.MatExpansionPanelActionRow, expansion.MatExpansionPanelHeader, expansion.MatExpansionPanelTitle, expansion.MatExpansionPanelDescription, expansion.MatExpansionPanelContent, textField.CdkAutofill, textField.CdkTextareaAutosize, formField.MatError, formField.MatFormField, formField.MatHint, formField.MatLabel, formField.MatPlaceholder, formField.MatPrefix, formField.MatSuffix, input.MatInput, input.MatTextareaAutosize, radio.MatRadioGroup, radio.MatRadioButton, select.MatSelect, select.MatSelectTrigger, HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, MapToIterable]);
    core.ɵɵsetComponentScope(HbFormObjectComponent, [forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, forms.FormControlDirective, forms.FormGroupDirective, forms.FormControlName, forms.FormGroupName, forms.FormArrayName, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, scrolling.CdkScrollable, autocomplete.MatAutocomplete, core$1.MatOption, core$1.MatOptgroup, autocomplete.MatAutocompleteTrigger, autocomplete.MatAutocompleteOrigin, bidi.Dir, button.MatButton, button.MatAnchor, buttonToggle.MatButtonToggleGroup, buttonToggle.MatButtonToggle, card.MatCard, card.MatCardHeader, card.MatCardTitleGroup, card.MatCardContent, card.MatCardTitle, card.MatCardSubtitle, card.MatCardActions, card.MatCardFooter, card.MatCardSmImage, card.MatCardMdImage, card.MatCardLgImage, card.MatCardImage, card.MatCardXlImage, card.MatCardAvatar, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, datepicker.MatCalendar, datepicker.MatCalendarBody, datepicker.MatDatepicker, datepicker.MatDatepickerContent, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, datepicker.MatDatepickerToggleIcon, datepicker.MatMonthView, datepicker.MatYearView, datepicker.MatMultiYearView, datepicker.MatCalendarHeader, expansion.MatAccordion, expansion.MatExpansionPanel, expansion.MatExpansionPanelActionRow, expansion.MatExpansionPanelHeader, expansion.MatExpansionPanelTitle, expansion.MatExpansionPanelDescription, expansion.MatExpansionPanelContent, textField.CdkAutofill, textField.CdkTextareaAutosize, formField.MatError, formField.MatFormField, formField.MatHint, formField.MatLabel, formField.MatPlaceholder, formField.MatPrefix, formField.MatSuffix, input.MatInput, input.MatTextareaAutosize, radio.MatRadioGroup, radio.MatRadioButton, select.MatSelect, select.MatSelectTrigger, HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, MapToIterable]);
    core.ɵɵsetComponentScope(HbFormMatObjectComponent, [forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, forms.FormControlDirective, forms.FormGroupDirective, forms.FormControlName, forms.FormGroupName, forms.FormArrayName, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, scrolling.CdkScrollable, autocomplete.MatAutocomplete, core$1.MatOption, core$1.MatOptgroup, autocomplete.MatAutocompleteTrigger, autocomplete.MatAutocompleteOrigin, bidi.Dir, button.MatButton, button.MatAnchor, buttonToggle.MatButtonToggleGroup, buttonToggle.MatButtonToggle, card.MatCard, card.MatCardHeader, card.MatCardTitleGroup, card.MatCardContent, card.MatCardTitle, card.MatCardSubtitle, card.MatCardActions, card.MatCardFooter, card.MatCardSmImage, card.MatCardMdImage, card.MatCardLgImage, card.MatCardImage, card.MatCardXlImage, card.MatCardAvatar, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, datepicker.MatCalendar, datepicker.MatCalendarBody, datepicker.MatDatepicker, datepicker.MatDatepickerContent, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, datepicker.MatDatepickerToggleIcon, datepicker.MatMonthView, datepicker.MatYearView, datepicker.MatMultiYearView, datepicker.MatCalendarHeader, expansion.MatAccordion, expansion.MatExpansionPanel, expansion.MatExpansionPanelActionRow, expansion.MatExpansionPanelHeader, expansion.MatExpansionPanelTitle, expansion.MatExpansionPanelDescription, expansion.MatExpansionPanelContent, textField.CdkAutofill, textField.CdkTextareaAutosize, formField.MatError, formField.MatFormField, formField.MatHint, formField.MatLabel, formField.MatPlaceholder, formField.MatPrefix, formField.MatSuffix, input.MatInput, input.MatTextareaAutosize, radio.MatRadioGroup, radio.MatRadioButton, select.MatSelect, select.MatSelectTrigger, HbFormArrayComponent,
        HbFormMatArrayComponent,
        HbFormObjectComponent,
        HbFormMatObjectComponent,
        HbFormWidgetComponent,
        HbFormMatWidgetComponent], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, MapToIterable]);

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
