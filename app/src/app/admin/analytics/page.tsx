"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const salesData = [42, 58, 49, 72, 64, 81, 90];
const conversionData = [2.4, 2.8, 3.1, 3.6, 4.1, 4.7, 5.2];

export default function AdminAnalyticsPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Analytics report generated successfully.");
  };

  const totalRevenue = salesData.reduce((sum, value) => sum + value, 0) * 1250;
  const avgConversion = conversionData.reduce((sum, value) => sum + value, 0) / conversionData.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Performance</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Analytics</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Button type="submit" className="rounded-full">Generate report</Button>
        </form>
      </div>

      {message ? <p className="text-sm text-emerald-700">{message}</p> : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Revenue</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">{formatCurrency(totalRevenue)}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Orders</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">1,248</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Conversion</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">{avgConversion.toFixed(1)}%</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Visitors</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight">18.4K</p>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Sales growth</h2>
            <span className="text-sm text-slate-500">Last 7 months</span>
          </div>
          <div className="flex h-64 items-end gap-3">
            {salesData.map((height, index) => (
              <div key={index} className="flex-1">
                <div className="rounded-t-2xl bg-slate-900" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Conversion rate</h2>
            <span className="text-sm text-slate-500">Avg. trend</span>
          </div>
          <div className="space-y-3">
            {conversionData.map((value, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Month {index + 1}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-stone-100">
                  <div className="h-full rounded-full bg-slate-900" style={{ width: `${(value / 6) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
