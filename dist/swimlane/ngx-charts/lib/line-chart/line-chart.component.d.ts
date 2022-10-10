import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { LegendOptions, LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import { ViewDimensions } from '../common/types/view-dimension.interface';
import * as i0 from "@angular/core";
export declare class LineChartComponent extends BaseChartComponent implements OnInit {
    legend: boolean;
    legendTitle: string;
    legendPosition: LegendPosition;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    autoScale: boolean;
    timeline: boolean;
    gradient: boolean;
    showGridLines: boolean;
    curve: any;
    activeEntries: any[];
    schemeType: ScaleType;
    rangeFillOpacity: number;
    trimXAxisTicks: boolean;
    trimYAxisTicks: boolean;
    rotateXAxisTicks: boolean;
    maxXAxisTickLength: number;
    maxYAxisTickLength: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    roundDomains: boolean;
    tooltipDisabled: boolean;
    showRefLines: boolean;
    referenceLines: any;
    showRefLabels: boolean;
    xScaleMin: number;
    xScaleMax: number;
    yScaleMin: number;
    yScaleMax: number;
    showCircles: boolean;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    seriesTooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: [number, number];
    seriesDomain: any;
    yScale: any;
    xScale: any;
    colors: ColorHelper;
    scaleType: ScaleType;
    transform: string;
    clipPath: string;
    clipPathId: string;
    areaPath: any;
    margin: number[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    legendOptions: any;
    hasRange: boolean;
    timelineWidth: any;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    isSSR: boolean;
    ngOnInit(): void;
    update(): void;
    updateTimeline(): void;
    getXDomain(): any[];
    getYDomain(): [number, number];
    getSeriesDomain(): string[];
    getXScale(domain: any, width: number): any;
    getYScale(domain: any, height: number): any;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    onClick(data: any): void;
    trackBy(index: number, item: any): string;
    setColors(): void;
    getLegendOptions(): LegendOptions;
    updateYAxisWidth({ width }: {
        width: number;
    }): void;
    updateXAxisHeight({ height }: {
        height: number;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineChartComponent, "ngx-charts-line-chart", never, { "legend": "legend"; "legendTitle": "legendTitle"; "legendPosition": "legendPosition"; "xAxis": "xAxis"; "yAxis": "yAxis"; "showXAxisLabel": "showXAxisLabel"; "showYAxisLabel": "showYAxisLabel"; "xAxisLabel": "xAxisLabel"; "yAxisLabel": "yAxisLabel"; "autoScale": "autoScale"; "timeline": "timeline"; "gradient": "gradient"; "showGridLines": "showGridLines"; "curve": "curve"; "activeEntries": "activeEntries"; "schemeType": "schemeType"; "rangeFillOpacity": "rangeFillOpacity"; "trimXAxisTicks": "trimXAxisTicks"; "trimYAxisTicks": "trimYAxisTicks"; "rotateXAxisTicks": "rotateXAxisTicks"; "maxXAxisTickLength": "maxXAxisTickLength"; "maxYAxisTickLength": "maxYAxisTickLength"; "xAxisTickFormatting": "xAxisTickFormatting"; "yAxisTickFormatting": "yAxisTickFormatting"; "xAxisTicks": "xAxisTicks"; "yAxisTicks": "yAxisTicks"; "roundDomains": "roundDomains"; "tooltipDisabled": "tooltipDisabled"; "showRefLines": "showRefLines"; "referenceLines": "referenceLines"; "showRefLabels": "showRefLabels"; "xScaleMin": "xScaleMin"; "xScaleMax": "xScaleMax"; "yScaleMin": "yScaleMin"; "yScaleMax": "yScaleMax"; "showCircles": "showCircles"; }, { "activate": "activate"; "deactivate": "deactivate"; }, ["tooltipTemplate", "seriesTooltipTemplate"], never>;
}
