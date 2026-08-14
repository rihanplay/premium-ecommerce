import { Card } from "@/components/ui/card";
import { recentOrders, customerData, products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function AdminDashboardPage() {
  const totalSales = recentOrders.reduce((sum, order) => sum + order.total, 0);
  const lowStock = products.filter((product) => product.stock <= product.lowStockThreshold).length;

  return (
    <div className="min-h-screen bg-stone-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Admin overview</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard</h1>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total sales", value: formatCurrency(totalSales) },
            { label: "Today’s sales", value: formatCurrency(12999) },
            { label: "Monthly sales", value: formatCurrency(84250) },
            { label: "Total orders", value: "1,248" },
          ].map((item) => (
            <Card key={item.label} className="p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{item.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Revenue chart</h2>
              <span className="text-sm text-slate-500">Last 6 months</span>
            </div>
            <div className="flex h-64 items-end gap-3">
              {[42, 58, 49, 72, 64, 81].map((height, index) => (
                <div key={index} className="flex-1">
                  <div className="rounded-t-2xl bg-slate-900" style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent orders</h2>
              <span className="text-sm text-slate-500">Today</span>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-stone-50 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{order.id}</p>
                    <p className="text-sm text-slate-500">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-800">{formatCurrency(order.total)}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Low-stock products</h2>
              <span className="text-sm text-slate-500">{lowStock} items</span>
            </div>
            <div className="space-y-3">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-stone-50 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{product.name}</p>
                    <p className="text-sm text-slate-500">SKU: {product.sku}</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">{product.stock} left</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Customer snapshot</h2>
              <span className="text-sm text-slate-500">{customerData.length} records</span>
            </div>
            <div className="space-y-3">
              {customerData.slice(0, 4).map((customer) => (
                <div key={customer.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-stone-50 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{customer.name}</p>
                    <p className="text-sm text-slate-500">{customer.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-800">{formatCurrency(customer.totalSpent)}</p>
                    <p className="text-xs text-slate-500">{customer.orders} orders</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
