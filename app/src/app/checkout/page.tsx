import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Secure checkout</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Checkout</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <Card className="p-5">
              <h2 className="text-lg font-semibold">1. Customer information</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="First name" />
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Last name" />
                <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Email address" />
                <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Phone number" />
              </div>
            </Card>

            <Card className="p-5">
              <h2 className="text-lg font-semibold">2. Shipping address</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Address line 1" />
                <input className="md:col-span-2 rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Address line 2" />
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="City" />
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="State" />
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Pincode" />
                <input className="rounded-xl border border-slate-200 bg-stone-50 px-3 py-3 text-sm outline-none" placeholder="Country" />
              </div>
            </Card>

            <Card className="p-5">
              <h2 className="text-lg font-semibold">3. Shipping method</h2>
              <div className="mt-4 space-y-3">
                {['Standard delivery (3-5 days)', 'Express delivery (1-2 days)', 'Store pickup'].map((method) => (
                  <label key={method} className="flex items-center justify-between rounded-xl border border-slate-200 bg-stone-50 p-3 text-sm text-slate-700">
                    <span>{method}</span>
                    <input type="radio" name="shipping" />
                  </label>
                ))}
              </div>
            </Card>

            <Card className="p-5">
              <h2 className="text-lg font-semibold">4. Payment</h2>
              <div className="mt-4 space-y-3">
                {['Cash on Delivery', 'Razorpay', 'Cashfree'].map((method) => (
                  <label key={method} className="flex items-center justify-between rounded-xl border border-slate-200 bg-stone-50 p-3 text-sm text-slate-700">
                    <span>{method}</span>
                    <input type="radio" name="payment" />
                  </label>
                ))}
              </div>
            </Card>
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Order summary</p>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotal</span><span>₹8,399</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₹149</span></div>
              <div className="flex justify-between"><span>Tax</span><span>₹420</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-₹0</span></div>
            </div>
            <div className="mt-5 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-slate-800">
                <span>Total</span>
                <span>₹8,968</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <input className="flex-1 rounded-full border border-slate-200 bg-stone-50 px-3 py-2 text-sm outline-none" placeholder="Coupon code" />
              <Button variant="secondary" className="rounded-full">Apply</Button>
            </div>
            <Link href="/orders" className="mt-6 block">
              <Button className="w-full rounded-full">Place order</Button>
            </Link>
          </aside>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
