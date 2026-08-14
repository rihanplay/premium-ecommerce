import { Card } from "@/components/ui/card";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Security</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Admin users</h1>
      </div>

      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-stone-50 p-4">
            <p className="text-sm font-medium text-slate-700">Super Admin</p>
            <p className="mt-2 text-sm text-slate-500">Full access to all modules and settings.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-stone-50 p-4">
            <p className="text-sm font-medium text-slate-700">Product Manager</p>
            <p className="mt-2 text-sm text-slate-500">Manage catalog, pricing, and SEO content.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-stone-50 p-4">
            <p className="text-sm font-medium text-slate-700">Order Manager</p>
            <p className="mt-2 text-sm text-slate-500">Handle orders, tracking, and fulfillment.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-stone-50 p-4">
            <p className="text-sm font-medium text-slate-700">Manager</p>
            <p className="mt-2 text-sm text-slate-500">Monitor operations and store-wide campaigns.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
