import { EventEmitter, TemplateRef, TrackByFunction } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { Series } from '../models/chart-data.model';
import { BaseChartComponent } from '../common/base-chart.component';
import { BarChartType } from './types/bar-chart-type.enum';
import { ScaleType } from '../common/types/scale-type.enum';
import { LegendOptions, LegendPosition } from '../common/types/legend.model';
import { ViewDimensions } from '../common/types/view-dimension.interface';
import * as i0 from "@angular/core";
export declare class BarHorizontalNormalizedComponent extends BaseChartComponent {
    legend: boolean;
    legendTitle: string;
    legendPosition: LegendPosition;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    tooltipDisabled: boolean;
    gradient: boolean;
    showGridLines: boolean;
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
    barPadding: number;
    roundDomains: boolean;
    noBarWhenZero: boolean;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    groupDomain: string[];
    innerDomain: string[];
    valueDomain: [number, number];
    xScale: any;
    yScale: any;
    transform: string;
    colors: ColorHelper;
    margin: number[];
    xAxisHeight: number;
    yAxisWidth: number;
    legendOptions: LegendOptions;
    barChartType: typeof BarChartType;
    isSSR: boolean;
    ngOnInit(): void;
    update(): void;
    getGroupDomain(): string[];
    getInnerDomain(): string[];
    getYScale(): any;
    getXScale(): any;
    groupTransform(group: Series): string;
    onClick(data: any, group?: Series): void;
    trackBy: TrackByFunction<Series>;
    setColors(): void;
    getLegendOptions(): LegendOptions;
    updateYAxisWidth({ width }: {
        width: number;
    }): void;
    updateXAxisHeight({ height }: {
        height: number;
    }): void;
    onActivate(event: any, group: Series, fromLegend?: boolean): void;
    onDeactivate(event: any, group: Series, fromLegend?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarHorizontalNormalizedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarHorizontalNormalizedComponent, "ngx-charts-bar-horizontal-normalized", never, { "legend": "legend"; "legendTitle": "legendTitle"; "legendPosition": "legendPosition"; "xAxis": "xAxis"; "yAxis": "yAxis"; "showXAxisLabel": "showXAxisLabel"; "showYAxisLabel": "showYAxisLabel"; "xAxisLabel": "xAxisLabel"; "yAxisLabel": "yAxisLabel"; "tooltipDisabled": "tooltipDisabled"; "gradient": "gradient"; "showGridLines": "showGridLines"; "activeEntries": "activeEntries"; "schemeType": "schemeType"; "trimXAxisTicks": "trimXAxisTicks"; "trimYAxisTicks": "trimYAxisTicks"; "rotateXAxisTicks": "rotateXAxisTicks"; "maxXAxisTickLength": "maxXAxisTickLength"; "maxYAxisTickLength": "maxYAxisTickLength"; "xAxisTickFormatting": "xAxisTickFormatting"; "yAxisTickFormatting": "yAxisTickFormatting"; "xAxisTicks": "xAxisTicks"; "yAxisTicks": "yAxisTicks"; "barPadding": "barPadding"; "roundDomains": "roundDomains"; "noBarWhenZero": "noBarWhenZero"; }, { "activate": "activate"; "deactivate": "deactivate"; }, ["tooltipTemplate"], never>;
}
