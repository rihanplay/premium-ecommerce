"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Store settings saved successfully.");
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Configuration</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Settings</h1>
      </div>

      <Card className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Store name" defaultValue="O Store" />
            <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Currency" defaultValue="INR" />
            <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Support email" defaultValue="hello@ostore.in" />
            <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Tax rate" defaultValue="5%" />
            <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Shipping fee" defaultValue="₹149" />
          </div>
          {message ? <p className="mt-4 text-sm text-emerald-700">{message}</p> : null}
          <Button type="submit" className="mt-6 rounded-full">Save settings</Button>
        </form>
      </Card>
    </div>
  );
}
