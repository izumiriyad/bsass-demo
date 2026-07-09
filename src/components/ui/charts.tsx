"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: ChartData[];
  className?: string;
  height?: number;
  showLabels?: boolean;
}

export function BarChart({
  data,
  className,
  height = 200,
  showLabels = true,
}: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const defaultColors = [
    "hsl(var(--primary))",
    "hsl(var(--cyan))",
    "hsl(var(--success))",
    "hsl(var(--gold))",
  ];

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end gap-2" style={{ height }}>
        {data.map((item, i) => {
          const percentage = (item.value / maxValue) * 100;
          const color = item.color || defaultColors[i % defaultColors.length];
          return (
            <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full flex items-end justify-center" style={{ height: height - 24 }}>
                <div
                  className="w-full max-w-8 rounded-t-lg transition-all duration-500 ease-out"
                  style={{
                    height: `${percentage}%`,
                    background: color,
                    boxShadow: `0 0 20px ${color}40`,
                  }}
                />
              </div>
              {showLabels && (
                <span className="text-[11px] text-muted-foreground truncate max-w-full">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface LineChartProps {
  data: number[];
  className?: string;
  height?: number;
  color?: string;
  showDots?: boolean;
}

export function LineChart({
  data,
  className,
  height = 120,
  color = "hsl(var(--primary))",
  showDots = true,
}: LineChartProps) {
  const points = React.useMemo(() => {
    if (data.length < 2) return "";
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const width = 100 / (data.length - 1);

    return data
      .map((v, i) => {
        const x = i * width;
        const y = 100 - ((v - min) / range) * 100;
        return `${x},${y}`;
      })
      .join(" ");
  }, [data]);

  const linePath = React.useMemo(() => {
    if (data.length < 2) return "";
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const width = 100 / (data.length - 1);

    const points = data.map((v, i) => ({
      x: i * width,
      y: 100 - ((v - min) / range) * 100,
    }));

    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) / 3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) / 3;
      const cp2y = curr.y;
      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.x},${curr.y}`;
    }
    return d;
  }, [data]);

  const areaPath = React.useMemo(() => {
    if (!linePath) return "";
    return `${linePath} L 100,100 L 0,100 Z`;
  }, [linePath]);

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#line-gradient)" />
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {showDots &&
          data.map((v, i) => {
            const max = Math.max(...data);
            const min = Math.min(...data);
            const range = max - min || 1;
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - ((v - min) / range) * 100;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill={color}
                stroke="var(--background)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
      </svg>
    </div>
  );
}

interface DonutChartProps {
  data: ChartData[];
  className?: string;
  size?: number;
  thickness?: number;
  showLegend?: boolean;
}

export function DonutChart({
  data,
  className,
  size = 120,
  thickness = 20,
  showLegend = true,
}: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const defaultColors = [
    "hsl(var(--primary))",
    "hsl(var(--cyan))",
    "hsl(var(--success))",
    "hsl(var(--gold))",
    "hsl(var(--destructive))",
  ];

  let cumulativePercent = 0;
  const segments = data.map((item, i) => {
    const percent = item.value / total;
    const color = item.color || defaultColors[i % defaultColors.length];
    const startAngle = cumulativePercent * 360;
    cumulativePercent += percent;
    return {
      ...item,
      percent,
      color,
      startAngle,
    };
  });

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {segments.map((seg, i) => {
            const radius = 50 - thickness / 2;
            const circumference = 2 * Math.PI * radius;
            const dashArray = `${seg.percent * circumference} ${circumference}`;
            const dashOffset = -cumulativePercent * circumference + seg.percent * circumference;
            return (
              <circle
                key={i}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                style={{
                  transition: "stroke-dasharray 0.5s ease-out",
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{total.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">Total</span>
        </div>
      </div>
      {showLegend && (
        <div className="flex flex-col gap-2">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="size-3 rounded-full"
                style={{ background: seg.color }}
              />
              <span className="text-sm">{seg.label}</span>
              <span className="text-sm text-muted-foreground">
                ({(seg.percent * 100).toFixed(0)}%)
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MiniChart({
  data,
  type = "line",
  width = 80,
  height = 32,
  className,
}: {
  data: number[];
  type?: "line" | "bar";
  width?: number;
  height?: number;
  className?: string;
}) {
  if (type === "bar") {
    const max = Math.max(...data);
    return (
      <div className={cn("flex items-end gap-0.5", className)} style={{ height }}>
        {data.map((v, i) => (
          <div
            key={i}
            className="w-1 bg-primary rounded-sm"
            style={{ height: `${(v / max) * 100}%` }}
          />
        ))}
      </div>
    );
  }

  const points = React.useMemo(() => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    return data
      .map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height}`)
      .join(" ");
  }, [data, width, height]);

  return (
    <svg className={className} width={width} height={height}>
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
