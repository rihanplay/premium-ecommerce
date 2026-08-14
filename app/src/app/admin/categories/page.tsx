"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/mock-data";

export default function AdminCategoriesPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("New category created successfully.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Catalog</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Categories</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Button type="submit" className="rounded-full">Add category</Button>
        </form>
      </div>

      {message ? <p className="text-sm text-emerald-700">{message}</p> : null}

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-slate-200 bg-stone-50 px-4 py-3">
              <p className="font-medium text-slate-800">{category.name}</p>
              <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                {category.featured ? "Featured" : "Standard"}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-slate-600">{category.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-slate-500">
                <span>Slug</span>
                <span>{category.slug}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
