import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StoreHeader } from "@/components/store/header";
import { StoreFooter } from "@/components/store/footer";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const cartItems = [
  { product: products[0], quantity: 1, variant: "Ivory / M" },
  { product: products[2], quantity: 2, variant: "Rose Gold / Classic" },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 1999 ? 0 : 149;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Your bag</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Cart</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {cartItems.map(({ product, quantity, variant }) => (
              <Card key={product.id} className="p-3 sm:p-4">
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200">
                    <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-slate-800">{product.name}</p>
                        <p className="mt-1 text-sm text-slate-500">{variant}</p>
                      </div>
                      <button className="rounded-full border border-slate-200 p-2 text-slate-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-stone-50 px-2 py-1.5">
                        <button className="rounded-full p-1 hover:bg-white"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-7 text-center text-sm font-medium">{quantity}</span>
                        <button className="rounded-full p-1 hover:bg-white"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <p className="text-lg font-semibold">{formatCurrency(product.price * quantity)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Order summary</p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>{formatCurrency(tax)}</span></div>
              <div className="flex justify-between"><span>Coupon</span><span>- ₹0</span></div>
            </div>
            <div className="mt-5 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-slate-800">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            <Link href="/checkout" className="mt-6 block">
              <Button className="w-full rounded-full">Proceed to checkout</Button>
            </Link>
          </aside>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
