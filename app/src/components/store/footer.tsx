import Link from "next/link";

export function StoreFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                O
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">O Store</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Premium essentials for Indian lifestyles, blending craftsmanship, comfort, and modern design.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Shop</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/shop">New Arrivals</Link></li>
              <li><Link href="/shop">Best Sellers</Link></li>
              <li><Link href="/shop">Sale</Link></li>
              <li><Link href="/categories">Categories</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Company</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Support</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/orders">My Orders</Link></li>
              <li><Link href="/refund-policy">Returns</Link></li>
              <li><Link href="/checkout">Shipping</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 O Store. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
