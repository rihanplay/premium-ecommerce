import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/product-card";
import { StoreFooter } from "@/components/store/footer";
import { StoreHeader } from "@/components/store/header";
import { categories, products } from "@/lib/mock-data";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <StoreHeader />
      <main className="container-shell section-pad">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Shop all</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Premium essentials</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2 rounded-full">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-slate-300">
              {category.name}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Filters</p>
            </div>
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">Price</p>
                <input type="range" min={0} max={10000} step={500} className="w-full accent-slate-900" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">Brand</p>
                <div className="space-y-2 text-sm text-slate-600">
                  {['Aster & Co.', 'North Avenue', 'Lune Studio', 'Summit Run'].map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-slate-700">Availability</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <label className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> In stock</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> Low stock</label>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-sm text-slate-600">Showing 12 products</p>
              <select className="rounded-full border border-slate-200 bg-stone-50 px-3 py-2 text-sm text-slate-700 outline-none">
                <option>Sort by newest</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}
