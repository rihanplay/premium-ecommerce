import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { recentOrders } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const order = recentOrders.find((item) => item.id === `#${params.id}`) ?? recentOrders[0];

  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Order details</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{order.id}</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Order summary</h2>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs uppercase tracking-[0.12em] text-slate-700">{order.status}</span>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Customer</span><span>{order.customer}</span></div>
              <div className="flex justify-between"><span>Payment</span><span>{order.paymentStatus}</span></div>
              <div className="flex justify-between"><span>Date</span><span>{order.date}</span></div>
              <div className="flex justify-between"><span>Total</span><span>{formatCurrency(order.total)}</span></div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-lg font-semibold">Shipping details</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>House 14, Rosewood Avenue</p>
              <p>Bengaluru, Karnataka 560001</p>
              <p>Tracking: BW1892832</p>
            </div>
            <Link href="/orders" className="mt-5 inline-flex text-sm font-medium text-slate-800">Back to orders</Link>
          </Card>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
