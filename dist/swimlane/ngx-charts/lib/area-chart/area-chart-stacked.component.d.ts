import { EventEmitter, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { SeriesType } from '../common/circle-series.component';
import { LegendOptions, LegendPosition } from '../common/types/legend.model';
import { ViewDimensions } from '../common/types/view-dimension.interface';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
export declare class AreaChartStackedComponent extends BaseChartComponent {
    legend: boolean;
    legendTitle: string;
    legendPosition: LegendPosition;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    timeline: boolean;
    gradient: boolean;
    showGridLines: boolean;
    curve: any;
    activeEntries: any[];
    schemeType: ScaleType;
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
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: number;
    yScaleMax: number;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    seriesTooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    scaleType: ScaleType;
    xDomain: any[];
    xSet: any[];
    yDomain: [number, number];
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    clipPathId: string;
    clipPath: string;
    colors: ColorHelper;
    margin: number[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    legendOptions: any;
    timelineWidth: number;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    seriesType: typeof SeriesType;
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
    onClick(data: any, series?: any): void;
    trackBy(index: any, item: any): string;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AreaChartStackedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AreaChartStackedComponent, "ngx-charts-area-chart-stacked", never, { "legend": "legend"; "legendTitle": "legendTitle"; "legendPosition": "legendPosition"; "xAxis": "xAxis"; "yAxis": "yAxis"; "showXAxisLabel": "showXAxisLabel"; "showYAxisLabel": "showYAxisLabel"; "xAxisLabel": "xAxisLabel"; "yAxisLabel": "yAxisLabel"; "timeline": "timeline"; "gradient": "gradient"; "showGridLines": "showGridLines"; "curve": "curve"; "activeEntries": "activeEntries"; "schemeType": "schemeType"; "trimXAxisTicks": "trimXAxisTicks"; "trimYAxisTicks": "trimYAxisTicks"; "rotateXAxisTicks": "rotateXAxisTicks"; "maxXAxisTickLength": "maxXAxisTickLength"; "maxYAxisTickLength": "maxYAxisTickLength"; "xAxisTickFormatting": "xAxisTickFormatting"; "yAxisTickFormatting": "yAxisTickFormatting"; "xAxisTicks": "xAxisTicks"; "yAxisTicks": "yAxisTicks"; "roundDomains": "roundDomains"; "tooltipDisabled": "tooltipDisabled"; "xScaleMin": "xScaleMin"; "xScaleMax": "xScaleMax"; "yScaleMin": "yScaleMin"; "yScaleMax": "yScaleMax"; }, { "activate": "activate"; "deactivate": "deactivate"; }, ["tooltipTemplate", "seriesTooltipTemplate"], never>;
}
