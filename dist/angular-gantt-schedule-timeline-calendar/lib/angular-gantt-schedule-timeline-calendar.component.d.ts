import { AfterViewInit, ElementRef, OnDestroy, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class GSTCComponent implements AfterViewInit, OnDestroy {
    config: any;
    onState: EventEmitter<any>;
    gstcElement: ElementRef;
    GSTC: any;
    state: any;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<GSTCComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GSTCComponent, "gstc", never, { "config": "config"; }, { "onState": "onState"; }, never, never>;
}
