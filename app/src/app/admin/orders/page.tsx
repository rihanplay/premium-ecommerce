import { Card } from "@/components/ui/card";
import { recentOrders } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Operations</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Orders</h1>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-stone-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Order</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-800">{order.id}</td>
                  <td className="px-4 py-3 text-slate-600">{order.customer}</td>
                  <td className="px-4 py-3 text-slate-600">{order.status}</td>
                  <td className="px-4 py-3 text-slate-600">{formatCurrency(order.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
