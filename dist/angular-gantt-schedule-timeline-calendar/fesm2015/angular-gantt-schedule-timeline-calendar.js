import { EventEmitter, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelement, ɵsetClassMetadata, Component, ViewEncapsulation, Input, Output, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import GSTC from 'gantt-schedule-timeline-calendar/dist/index.esm.js';

const _c0 = ["gstcElement"];
class GSTCComponent {
    constructor() {
        this.onState = new EventEmitter();
    }
    ngAfterViewInit() {
        const element = this.gstcElement.nativeElement;
        this.state = GSTC.api.stateFromConfig(this.config);
        this.onState.emit(this.state);
        this.GSTC = GSTC({
            element,
            state: this.state
        });
    }
    ngOnDestroy() {
        this.GSTC.app.destroy();
    }
}
GSTCComponent.ɵfac = function GSTCComponent_Factory(t) { return new (t || GSTCComponent)(); };
GSTCComponent.ɵcmp = ɵɵdefineComponent({ type: GSTCComponent, selectors: [["gstc"]], viewQuery: function GSTCComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gstcElement = _t.first);
    } }, inputs: { config: "config" }, outputs: { onState: "onState" }, decls: 2, vars: 0, consts: [[1, "gstc"], ["gstcElement", ""]], template: function GSTCComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
    } }, styles: [".gantt-schedule-timeline-calendar{display:flex;overflow:hidden;color:#606060;font-size:14px;background-color:#fdfdfd;line-height:1.2}.gantt-schedule-timeline-calendar *{box-sizing:border-box}.gantt-schedule-timeline-calendar__helper-center{text-align:center}.gantt-schedule-timeline-calendar__helper-dark{background:#f9fafb}.gantt-schedule-timeline-calendar__list-column-header-resizer--active{cursor:ew-resize}.gantt-schedule-timeline-calendar__list-column-header-resizer--active *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-schedule-timeline-calendar__vertical-scroll{overflow:hidden;overflow-y:visible;flex-shrink:0;position:absolute;right:0}.gantt-schedule-timeline-calendar__vertical-scroll>*{will-change:scroll-position}.gantt-schedule-timeline-calendar__horizontal-scroll{overflow:hidden;overflow-x:scroll}.gantt-schedule-timeline-calendar__horizontal-scroll>*{will-change:scroll-position}.gantt-schedule-timeline-calendar__list{border-collapse:collapse;display:flex;overflow:hidden;flex-grow:0;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-schedule-timeline-calendar__list>*{touch-action:none}.gantt-schedule-timeline-calendar__list-toggle{position:fixed;left:var(--compensation-x);top:var(--compensation-y);overflow:hidden;cursor:pointer;padding:14px;background:#fff;transition:box-shadow 250ms;box-shadow:0 0 0 transparent;border-bottom-right-radius:4px}.gantt-schedule-timeline-calendar__list-toggle:hover{box-shadow:0 0 6px rgba(0,0,0,.15)}.gantt-schedule-timeline-calendar__list-toggle img{opacity:.5}.gantt-schedule-timeline-calendar__list-column-row-expander{display:flex;height:var(--height);width:calc(var(--expander-padding-width) + var(--expander-size));flex-shrink:0;will-change:opacity}.gantt-schedule-timeline-calendar__list-column-row-expander-toggle{padding-left:var(--expander-padding-width);display:block;flex-shrink:0;height:var(--height);width:calc(var(--expander-size) + var(--expander-padding-width));overflow:hidden;text-align:center;margin:0 auto;will-change:opacity}.gantt-schedule-timeline-calendar__list-column-row-expander-toggle img{width:16px;height:16px;will-change:contents}.gantt-schedule-timeline-calendar__list-column-row-expander-toggle-child{cursor:default}.gantt-schedule-timeline-calendar__list-column-row-expander-toggle-closed,.gantt-schedule-timeline-calendar__list-column-row-expander-toggle-open{cursor:pointer}.gantt-schedule-timeline-calendar__list-column{width:var(--width);position:relative}.gantt-schedule-timeline-calendar__list-column-rows{height:var(--height);width:var(--width);overflow:hidden}.gantt-schedule-timeline-calendar__list-column-rows--scroll-compensation{height:var(--height);width:var(--width);overflow:hidden;will-change:transform}.gantt-schedule-timeline-calendar__list-column-header,.gantt-schedule-timeline-calendar__list-column-row{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:var(--height);line-height:var(--height);vertical-align:middle;font-size:14px;display:flex}.gantt-schedule-timeline-calendar__list-column-row *{overflow:hidden;text-overflow:ellipsis;vertical-align:middle;line-height:var(--height)}.gantt-schedule-timeline-calendar__list-column-row{border-bottom:1px solid rgba(237,241,242,.75);border-right:1px solid rgba(237,241,242,.75);width:var(--width);will-change:height}.gantt-schedule-timeline-calendar__list-column-row-content{width:calc(var(--width) - var(--expander-padding-width) - var(--expander-size));height:var(--height);overflow:hidden;padding-left:6px;flex-shrink:0;flex-grow:1}.gantt-schedule-timeline-calendar__list-column-header{background:#f9fafb;font-weight:500;color:#707070;height:var(--height);width:var(--width);line-height:var(--height);display:flex}.gantt-schedule-timeline-calendar__list-column-header-content{vertical-align:middle;line-height:calc(var(--height) - 2px);width:100%;display:flex}.gantt-schedule-timeline-calendar__list-column-header-resizer{display:flex;flex-grow:1;flex-shrink:0;background:0 0;vertical-align:middle;height:var(--height)}.gantt-schedule-timeline-calendar__list-column-header-resizer-container,.gantt-schedule-timeline-calendar__list-column-header-resizer-dots{display:block}.gantt-schedule-timeline-calendar__list-column-header-resizer-container{flex-grow:1;padding-left:6px}.gantt-schedule-timeline-calendar__list-column-header-resizer-line{position:absolute;top:0;width:0;height:100%;border-right:2px dashed #000;display:var(--display);left:var(--left);z-index:1000}.gantt-schedule-timeline-calendar__list-column-header-resizer-dots{cursor:ew-resize;background:0 0;padding-top:20px;padding-left:6px;padding-right:2px}.gantt-schedule-timeline-calendar__list-column-header-resizer-dots-dot{background:#e0eff2;width:3px;height:3px;border-radius:100%;margin-bottom:6px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.05)}.gantt-schedule-timeline-calendar__chart{flex-grow:1;flex-shrink:1;overflow:hidden}.gantt-schedule-timeline-calendar__chart-calendar{background:#f9fafb;margin-right:-17px;display:block}.gantt-schedule-timeline-calendar__chart-calendar-dates{overflow:hidden;color:#747a81;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex}.gantt-schedule-timeline-calendar__chart-calendar-date{flex-grow:0;flex-shrink:0;border:none;white-space:nowrap}.gantt-schedule-timeline-calendar__chart-calendar-date--month{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:20px}.gantt-schedule-timeline-calendar__chart-calendar-date--day{height:calc(var(--calendar-height) - 20px);text-align:center}.gantt-schedule-timeline-calendar__chart-calendar-date--day.current{box-shadow:inset 0 0 4px rgba(177,184,189,.45)}.gantt-schedule-timeline-calendar__chart-calendar-date-content{white-space:nowrap}.gantt-schedule-timeline-calendar__chart-calendar-date-content--hours{display:flex}.gantt-schedule-timeline-calendar__chart-calendar-date-content--hours-hour{flex-grow:1;flex-shrink:1;border-right:1px solid rgba(177,184,189,.5)}.gantt-schedule-timeline-calendar__chart-calendar-date-content--hours-hour.current:last-child,.gantt-schedule-timeline-calendar__chart-calendar-date-content--hours-hour.previous:last-child{border-right:none}.gantt-schedule-timeline-calendar__chart-calendar-date-content--day-small{font-size:14px;transform:rotate(90deg)}.gantt-schedule-timeline-calendar__chart-calendar-date-content--month{margin:2px 0;border-right:1px solid rgba(177,184,189,.5)}.gantt-schedule-timeline-calendar__chart-calendar-date-content--day{border-right:1px solid rgba(177,184,189,.5);font-size:18px;line-height:2em;overflow:visible}.gantt-schedule-timeline-calendar__chart-calendar-date-content--day.current,.gantt-schedule-timeline-calendar__chart-calendar-date-content--day.previous{border-right:none}.gantt-schedule-timeline-calendar__chart-calendar-date-content--day-word{border-right:1px solid rgba(177,184,189,.5)}.gantt-schedule-timeline-calendar__chart-calendar-date-content--day-word.current,.gantt-schedule-timeline-calendar__chart-calendar-date-content--day-word.previous{border-right:none}.gantt-schedule-timeline-calendar__chart-timeline{overflow:hidden;position:relative}.gantt-schedule-timeline-calendar__chart-timeline-inner{will-change:transform;overflow:hidden}.gantt-schedule-timeline-calendar__chart-timeline-grid{overflow:hidden}.gantt-schedule-timeline-calendar__chart-timeline-grid *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-schedule-timeline-calendar__chart-timeline-grid-row{display:flex;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:all;will-change:height}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block{pointer-events:all;flex-grow:0;flex-shrink:0;margin:auto 0;vertical-align:middle;overflow:hidden;border-right:1px solid rgba(237,241,242,.75);border-bottom:1px solid rgba(237,241,242,.75);touch-action:none}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block--selecting{background:rgba(0,119,192,.5)!important}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block--selecting:last-child{border-right:1px solid red}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block--selected{background:rgba(0,119,192,.75)!important}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block.current{background:rgba(241,196,15,.1)}.gantt-schedule-timeline-calendar__chart-timeline-grid-row-block--weekend{background:#f9fafb}.gantt-schedule-timeline-calendar__chart-timeline-dependency-lines-handles,.gantt-schedule-timeline-calendar__chart-timeline-dependency-lines-lines{position:absolute;left:0;top:0;pointer-events:none;width:var(--width);height:var(--height);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-schedule-timeline-calendar__chart-timeline-dependency-lines-handle,.gantt-schedule-timeline-calendar__chart-timeline-dependency-lines-handle--connector{position:absolute;border-radius:100%;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px dashed #e74c36}.gantt-schedule-timeline-calendar__chart-timeline-items{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none!important;overflow:hidden;touch-action:none}.gantt-schedule-timeline-calendar__chart-timeline-items *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-schedule-timeline-calendar__chart-timeline-items-row{overflow:hidden;pointer-events:none!important;will-change:opacity,height;touch-action:none}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item{touch-action:none;overflow:hidden;position:absolute;pointer-events:auto;padding:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#e74c3c;border-radius:3px;color:#fff;display:flex;height:calc(var(--row-height) - 8px);margin-top:4px;line-height:calc(var(--row-height) - 18px);will-change:contents}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-cut{width:10px;height:100%;float:left}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-cut svg{vertical-align:middle}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-label{touch-action:none;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-resizer{touch-action:none;width:8px;background:rgba(255,255,255,.1);cursor:ew-resize;flex-shrink:0;will-change:visibility}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item--selecting{box-shadow:0 0 2px 2px rgba(0,119,192,.5)}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item--selected{box-shadow:0 0 2px 2px #0077c0}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item--moving{touch-action:none;opacity:.5}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-dependency-line{position:absolute}.gantt-schedule-timeline-calendar__chart-timeline-items-row-item-dependency-handle{position:absolute;border-radius:100%;background:#e74c3c;box-shadow:0 4px 4px rgba(199,44,28,.678)}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GSTCComponent, [{
        type: Component,
        args: [{
                selector: "gstc",
                template: `
    <div class="gstc" #gstcElement></div>
  `,
                styleUrls: [
                    "../../../../node_modules/gantt-schedule-timeline-calendar/dist/style.css"
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { config: [{
            type: Input
        }], onState: [{
            type: Output
        }], gstcElement: [{
            type: ViewChild,
            args: ["gstcElement", { static: true }]
        }] }); })();

class AngularGanttScheduleTimelineCalendarModule {
}
AngularGanttScheduleTimelineCalendarModule.ɵmod = ɵɵdefineNgModule({ type: AngularGanttScheduleTimelineCalendarModule });
AngularGanttScheduleTimelineCalendarModule.ɵinj = ɵɵdefineInjector({ factory: function AngularGanttScheduleTimelineCalendarModule_Factory(t) { return new (t || AngularGanttScheduleTimelineCalendarModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularGanttScheduleTimelineCalendarModule, { declarations: [GSTCComponent], exports: [GSTCComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularGanttScheduleTimelineCalendarModule, [{
        type: NgModule,
        args: [{
                declarations: [GSTCComponent],
                imports: [],
                exports: [GSTCComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-gantt-schedule-timeline-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularGanttScheduleTimelineCalendarModule, GSTCComponent };
//# sourceMappingURL=angular-gantt-schedule-timeline-calendar.js.map
