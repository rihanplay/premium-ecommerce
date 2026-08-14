import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0 lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                O
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">O Store</p>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
            <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-stone-50 px-4 py-2.5">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                aria-label="Search products"
                placeholder="Search essentials, outfits, home decor..."
                className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button href="/wishlist" variant="ghost" size="sm" className="hidden h-10 w-10 rounded-full p-0 sm:inline-flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button href="/profile" variant="ghost" size="sm" className="hidden h-10 w-10 rounded-full p-0 sm:inline-flex">
              <User className="h-4 w-4" />
            </Button>
            <Button href="/cart" variant="secondary" size="sm" className="h-10 gap-2 rounded-full px-3">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="rounded-full bg-slate-900 px-1.5 py-0.5 text-[10px] text-white">3</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto border-t border-slate-200 bg-white py-2 text-sm text-slate-600 lg:hidden">
          {['Women', 'Men', 'Accessories', 'Home', 'New', 'Sale'].map((item) => (
            <Link key={item} href="/shop" className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-stone-100">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
