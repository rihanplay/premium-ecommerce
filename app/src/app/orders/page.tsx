import Link from "next/link";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { Card } from "@/components/ui/card";
import { recentOrders } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Account</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">My orders</h1>
        </div>

        <div className="space-y-4">
          {recentOrders.map((order) => (
            <Card key={order.id} className="p-4 sm:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-800">{order.id}</p>
                  <p className="mt-1 text-sm text-slate-500">{order.date}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>{order.customer}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs uppercase tracking-[0.12em] text-slate-700">{order.status}</span>
                  <span>{order.paymentStatus}</span>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg font-semibold">{formatCurrency(order.total)}</p>
                  <Link href={`/orders/${order.id}`} className="text-sm font-medium text-slate-700">View details</Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
